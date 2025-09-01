import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);

  // Adjust to your backend
  private readonly baseUrl = '/api/notifications';

  // Local cache (latest snapshot of notifications)
  private readonly _items$ = new BehaviorSubject<Notification[] | null>(null);

  /** Stream of notifications (null => not loaded yet) */
  readonly items$ = this._items$.asObservable();

  /** Convenience stream: only unread notifications */
  readonly unread$ = this.items$.pipe(
    map((items) => (items ?? []).filter((n) => !n.read))
  );

  /** Convenience stream: count of unread notifications */
  readonly unreadCount$ = this.unread$.pipe(map((arr) => arr.length));

  /** Load notifications from server (replaces cache) */
  fetchAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.baseUrl).pipe(
      tap((list) => this._items$.next(this.sortByDateDesc(list))),
      catchError((err) => {
        console.error('[NotificationService] fetchAll error', err);
        return throwError(() => err);
      })
    );
  }

  /** Mark single notification as read (optimistic) */
  markAsRead(id: number): Observable<void> {
    const prev = this._items$.value ?? [];
    const next = prev.map((n) => (n.id === id ? { ...n, read: true } : n));
    this._items$.next(next);

    return this.http.patch<void>(`${this.baseUrl}/${id}/read`, {}).pipe(
      catchError((err) => {
        // rollback
        this._items$.next(prev);
        console.error('[NotificationService] markAsRead error', err);
        return throwError(() => err);
      })
    );
  }

  /** Mark all notifications as read (optimistic) */
  markAllAsRead(): Observable<void> {
    const prev = this._items$.value ?? [];
    const next = prev.map((n) => ({ ...n, read: true }));
    this._items$.next(next);

    return this.http.patch<void>(`${this.baseUrl}/read-all`, {}).pipe(
      catchError((err) => {
        // rollback
        this._items$.next(prev);
        console.error('[NotificationService] markAllAsRead error', err);
        return throwError(() => err);
      })
    );
  }

  /** Delete a notification (optimistic) */
  delete(id: number): Observable<void> {
    const prev = this._items$.value ?? [];
    const next = prev.filter((n) => n.id !== id);
    this._items$.next(next);

    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError((err) => {
        // rollback
        this._items$.next(prev);
        console.error('[NotificationService] delete error', err);
        return throwError(() => err);
      })
    );
  }

  /** Optionally call from a polling/WS hook to upsert a notification */
  upsertLocal(notification: Notification): void {
    const list = this._items$.value ?? [];
    const idx = list.findIndex((n) => n.id === notification.id);
    const updated =
      idx >= 0
        ? [...list.slice(0, idx), notification, ...list.slice(idx + 1)]
        : [notification, ...list];
    this._items$.next(this.sortByDateDesc(updated));
  }

  private sortByDateDesc(list: Notification[]): Notification[] {
    return [...list].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    // (Assumes ISO strings; if the API returns Date objects, convert at the edge)
  }
}
