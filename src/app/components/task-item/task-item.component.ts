import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  //use the task interface to set new eventemitter
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onReminderTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onReminder(task: Task) {
    this.onReminderTask.emit(task);
  }

}
