import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../component/ui/button/button.component";

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Project Management Tool';

  handleClick() {
    console.log('running the click ...');
  }
}
