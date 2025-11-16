import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Performer {
  initial: string;
  name: string;
  rank: string;
}

@Component({
  selector: 'app-performance-card',
  imports: [CommonModule],
  templateUrl: './performance-card.html',
  styleUrl: './performance-card.css',
})
export class PerformanceCard {
  protected readonly performers: Performer[] = [
    { initial: 'M', name: 'Maylina', rank: '1st' },
    { initial: 'J', name: 'Jonathan', rank: '2nd' },
    { initial: 'Y', name: 'Yasmine', rank: '3rd' },
    { initial: 'R', name: 'Ronald', rank: '4th' }
  ];
}
