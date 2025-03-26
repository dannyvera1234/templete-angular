import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @ViewChild('notificationContainer') notificationContainer!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.notificationContainer && !this.notificationContainer.nativeElement.contains(event.target)) {
      this.isNotificationOpen.set(false);
    }
  }

  public readonly isNotificationOpen = signal(false);

  toggleNotification() {
    this.isNotificationOpen.set(!this.isNotificationOpen());
  }
}
