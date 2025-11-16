import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { AlertCard } from './components/alert-card/alert-card';
import { StatCard } from './components/stat-card/stat-card';
import { TaskItem, Task } from './components/task-item/task-item';
import { ChartCard } from './components/chart-card/chart-card';
import { PerformanceCard } from './components/performance-card/performance-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Sidebar,
    Header,
    AlertCard,
    StatCard,
    TaskItem,
    ChartCard,
    PerformanceCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly sidebar = viewChild.required(Sidebar);

  protected readonly tasks = signal<Task[]>([
    {
      icon: 'J',
      name: 'Journey Scarves',
      description: 'Rebranding and Website Design',
      status: 'On Going',
      procentation: 51,
      dueDate: 'Aug, 17 2024',
      teamMembers: ['A', 'B', 'C', 'D']
    },
    {
      icon: 'E',
      name: 'Edifier',
      description: 'Web Design & Development',
      status: 'On Going',
      procentation: 51,
      dueDate: 'Aug, 17 2024',
      teamMembers: ['A', 'B']
    },
    {
      icon: 'U',
      name: 'Ugreen',
      description: 'Web App & Dashboard',
      status: 'On Going',
      procentation: 89,
      dueDate: 'Aug, 15 2024',
      teamMembers: ['A', 'B', 'C']
    },
    {
      icon: 'CNN',
      name: 'CNN',
      description: 'Rebranding and Soemed Content',
      status: 'On Going',
      procentation: 89,
      dueDate: 'Aug, 15 2024',
      teamMembers: ['A', 'B', 'C', 'D']
    }
  ]);

  onMenuToggle(): void {
    this.sidebar().toggleSidebar();
  }
}
