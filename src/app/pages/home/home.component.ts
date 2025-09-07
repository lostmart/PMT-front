import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components/ui';
import { ApiServiceTsService } from '@shared/services/api.service';
import { themeStyles } from '@shared/components/theme/styles';
import { environment } from 'environments/environment';
// const { background, text: textColor } = themeStyles.primary;

export type TBackStatus = 'online' | 'offline' | 'checking' | '';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  backendStatus: TBackStatus = 'checking';

  title = 'Project Management Tool';
  theme = themeStyles.secondary;

  constructor(private api: ApiServiceTsService) {}

  ngOnInit() {
    this.api.pingBackend().subscribe({
      next: (response: any) => console.log(response),
      error: (error: any) => console.error(error),
      complete: () => console.log('API call completed'),
    });
  }

  handleClick() {
    console.log('running the click ...');
  }
}
