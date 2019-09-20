import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Output() update = new EventEmitter<string>();

  constructor() { }

  updateSelection($event: string) {
    this.update.emit($event);
  }

  ngOnInit() {
  }

}
