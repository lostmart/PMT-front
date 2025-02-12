import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Import NgFor explicitly

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Output() actionSelected = new EventEmitter<string>();

  menuItems = [
    { label: 'View', icon: 'eye', action: 'view' },
    { label: 'Edit', icon: 'pencil', action: 'edit' },
    { label: 'Delete', icon: 'trash', action: 'delete' },
  ];

  onItemClick(action: string) {
    this.actionSelected.emit(action);
  }
}
