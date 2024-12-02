import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnText: string = 'Button here'; // Accepts btnText as an input, with a default value
  @Input() background: string = 'bg-green-600';
  @Input() text: string = 'text-zinc-100';
  @Input() onclick: Function | null = null;

  handleBtnClick() {
    console.log('running the click ...');
  }
}
