import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { themeStyles } from '../../../../styles';
import { NgIf } from '@angular/common';
themeStyles;

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css',
})
export class DialogueComponent {
  neutralTheme = themeStyles.neutral;
  secondaryTheme = themeStyles.secondary;

  @Input() showDialogue: boolean | null = false;
  @Output() toggleDialogue = new EventEmitter();

  onClickBtn() {
    this.toggleDialogue.emit();
  }
}
