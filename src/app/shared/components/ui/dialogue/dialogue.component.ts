import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { themeStyles } from '@shared/components/theme/styles';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
})
export class DialogueComponent {
  neutralTheme = themeStyles.primary;
  secondaryTheme = themeStyles.primary;

  @Input() showDialogue: boolean | null = false;
  @Output() toggleDialogue = new EventEmitter<void>();

  onClickBtn(): void {
    this.toggleDialogue.emit();
  }
}
