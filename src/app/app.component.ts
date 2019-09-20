import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hookup';
  selection = { value: 'nognix' };

  updateSelection($event: string) {
    this.selection.value = $event;
  }
}
