import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() type: string = '';
  @Input() selectionvalue: string = '';
  @Output() update = new EventEmitter<string>();

  updateSelection($event: string) {
    this.update.emit($event);
  }
}
