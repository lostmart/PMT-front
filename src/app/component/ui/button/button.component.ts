import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { themeStyles } from '../../../../styles';

const { background, text: textColor } = themeStyles.primary;

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnText: string = 'Default Text'; // Accepts btnText as an input, with a default value

  handleBtnClick() {
    console.log('running the click ...');
  }

  background = background;
  text = textColor;
}
