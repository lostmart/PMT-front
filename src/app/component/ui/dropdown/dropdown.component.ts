import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() isDropDownOpen = false;

  @Output() closeDropdown = new EventEmitter();
  @Output() actionSelected = new EventEmitter<'edit' | 'delete' | 'view'>();

  menuItems = [
    { label: 'View', icon: 'eye', action: 'view' },
    { label: 'Edit', icon: 'pencil', action: 'edit' },
    { label: 'Delete', icon: 'trash', action: 'delete' },
  ];

  onItemClick(action: string) {
    this.actionSelected.emit(action as 'edit' | 'delete' | 'view');
  }
}
