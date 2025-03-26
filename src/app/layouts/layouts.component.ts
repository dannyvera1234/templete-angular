import { AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ConfigComponent } from './config';
import { HeaderComponent } from './header';
import { SidebarComponent } from './sidebar';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, NgClass, ConfigComponent],
  templateUrl: './layouts.component.html',
})
export class LayoutsComponent implements AfterViewInit {
  @ViewChild('leftsidenav') sidenav!: ElementRef;

  public readonly isMobile = signal(window.innerWidth <= 768);
  public readonly isOver = signal(!this.isMobile());

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth <= 768);
    this.isOver.set(!this.isMobile());
  }

  ngAfterViewInit() {
    this.onResize(); // Asegura que el estado inicial sea correcto
  }

  // Alternar visibilidad del sidebar
  toggleSidebar(): void {
    this.isOver.set(!this.isOver());
  }
}
