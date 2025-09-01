export type NotificationType =
  | 'task-assigned'
  | 'task-updated'
  | 'project-invitation';

export interface Notification {
  id: number;
  userId: number;
  message: string;
  type: NotificationType;
  read: boolean;
  /** ISO 8601 string from backend (e.g., "2025-09-01T11:22:33.456Z") */
  createdAt: string;
  /** Optional deep-links for routing */
  relatedTaskId?: number;
  relatedProjectId?: number;
}
