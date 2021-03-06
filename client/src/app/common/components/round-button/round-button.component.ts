import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() isFlashing = false;
  @Input() customStyles: object;
  @Input() customIconStyle: object;
  @Output() clickButton = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.clickButton.emit();
  }
}
