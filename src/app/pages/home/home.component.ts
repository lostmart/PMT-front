import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components/ui';
//import { ApiServiceTsService } from '@shared/services/api.service';
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

  constructor() {}

  ngOnInit() {
    // console.log('Home component initialized');
    // this.api.pingBackend().subscribe({
    //   next: (response: any) => console.log(response),
    //   error: (error: any) => console.error(error),
    //   complete: () => console.log('API call completed'),
    // });
  }

  handleClick() {
    console.log('running the click ...');
  }
}
