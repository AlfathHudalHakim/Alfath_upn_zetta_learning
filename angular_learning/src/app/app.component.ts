import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_learning';
  isChild = false;

  tampil(): void{
    this.isChild = !this.isChild
  }
}
