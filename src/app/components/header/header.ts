import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly userName = 'Erwin Agpasa';
  protected readonly currentDate = 'Sunday, June 25, 2024';

  menuToggle = output<void>();

  onMenuClick(): void {
    this.menuToggle.emit();
  }
}
