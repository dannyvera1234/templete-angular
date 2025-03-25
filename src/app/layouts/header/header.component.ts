import { Component, ElementRef, EventEmitter, HostListener, Output, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Output() toggleMobileNav = new EventEmitter<void>();
  @ViewChild('menuContainer') menuContainer!: ElementRef;

  public readonly isMenuOpen = signal(false);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.menuContainer && !this.menuContainer.nativeElement.contains(event.target)) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
