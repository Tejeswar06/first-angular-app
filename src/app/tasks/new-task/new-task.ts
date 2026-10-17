import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) newTask!: boolean;
  @Output() cancel = new EventEmitter<void>();

  onCancel(){
    this.cancel.emit();
  }

}
