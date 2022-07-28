import { Component } from '@angular/core';
import { DataService } from './data.service';
import { UserData } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Crud Operation in Angular';
}
