import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components/ui';
import { themeStyles } from '@shared/components/theme/styles';

// const { background, text: textColor } = themeStyles.primary;

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Project Management Tool';
  theme = themeStyles.secondary;

  handleClick() {
    console.log('running the click ...');
  }
}
