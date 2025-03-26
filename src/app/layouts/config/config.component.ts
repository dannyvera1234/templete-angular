import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-config',
  imports: [NgClass],
  templateUrl: './config.component.html',
})
export class ConfigComponent {
  @ViewChild('panelContainer') menuContainer!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.menuContainer && !this.menuContainer.nativeElement.contains(event.target)) {
      this.isConfigOpen.set(false);
    }
  }

  public readonly isConfigOpen = signal(false);

  // Abre el panel de configuración
  openConfigPanel() {
    this.isConfigOpen.set(true);
  }

  // Cierra el panel de configuración
  closeConfigPanel() {
    this.isConfigOpen.set(false);
  }
}
