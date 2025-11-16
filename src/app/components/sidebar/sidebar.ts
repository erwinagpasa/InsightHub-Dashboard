import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  icon: string;
  label: string;
  badge?: number;
  active?: boolean;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  protected readonly isOpen = signal(false);
  protected readonly menuItems = signal<MenuItem[]>([
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📥', label: 'Inboxs' },
    { icon: '🚀', label: 'Performances' },
    {
      icon: '📁',
      label: 'Projects',
      expanded: true,
      children: [
        { icon: '🔵', label: 'Active Project' },
        { icon: '🟢', label: 'Project Done' },
        { icon: '🔴', label: 'Project On Hold' }
      ]
    },
    { icon: '📋', label: 'Employe Task' },
    { icon: '🏖️', label: 'Absence' },
    { icon: '📊', label: 'Analytics' },
    { icon: '👥', label: 'Client List' },
    { icon: '🔔', label: 'Notification', badge: 2 },
    { icon: '❓', label: 'Help Center' }
  ]);

  toggleSidebar(): void {
    this.isOpen.set(!this.isOpen());
  }

  closeSidebar(): void {
    this.isOpen.set(false);
  }

  toggleExpanded(item: MenuItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}
