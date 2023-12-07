import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css'],
})
export class ToogleComponent {
  @Input() data!: {
    label: string;
    checked: boolean;
  };

  @Output() clicked = new EventEmitter<void>();
}
