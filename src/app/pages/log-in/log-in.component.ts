import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../component/ui/button/button.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {}
