import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskDialog} from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) newTask!: boolean;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskDialog>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
