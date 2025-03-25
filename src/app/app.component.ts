import { Component } from '@angular/core';
import { LayoutsComponent } from './layouts';

@Component({
  selector: 'app-root',
  imports: [LayoutsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'templete';
}
