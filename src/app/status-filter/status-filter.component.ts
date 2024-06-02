import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [],
  templateUrl: './status-filter.component.html',
  styleUrl: './status-filter.component.css'
})
export class StatusFilterComponent {
  @Input() status : string = 'ALL';
  @Output() change = new EventEmitter<string>()
  // the input decorator is used to pass data from parent component to child component
  changeStatus(newStatus : string) : void {
    this.change.emit(newStatus)
  }

}
