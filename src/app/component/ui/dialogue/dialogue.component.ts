import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { themeStyles } from '../../../../styles';
themeStyles;

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css',
})
export class DialogueComponent {
  neutralTheme = themeStyles.neutral;
  secondaryTheme = themeStyles.secondary;

  handleClick() {
    console.log('running the click ...');
  }
}
