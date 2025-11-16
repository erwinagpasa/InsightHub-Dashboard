import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  icon: string;
  name: string;
  description: string;
  status: string;
  procentation: number;
  dueDate: string;
  teamMembers: string[];
}

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input.required<Task>();
}
