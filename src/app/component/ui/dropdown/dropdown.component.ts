import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() isVisible = false;

  @Output() closeDropdown = new EventEmitter();
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
