import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';

interface MenuItem {
  name: string;
  icon?: string;
  active?: boolean;
  badge?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  isSubsection?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styles: [`

.custom-scrollbar::-webkit-scrollbar {
  width: 3px; /* Hace la barra más delgada */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .custom-scrollbar::-webkit-scrollbar {
    display: none;
  }
}
 `]
})
export class SidebarComponent {
  @Input({ required: true }) showToggle = true;
  @Input({ required: true }) isMobile = true;


  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.isMobile && this.showToggle) {
      if (!this.elRef.nativeElement.contains(event.target)) {
        this.showToggle = false;

      }
    }
  }

  menuSections: MenuSection[] = [
    {
      title: 'Dashboards',
      items: [
        { name: 'Analytics', icon: 'mdi:chart-line', active: true },
        { name: 'eCommerce', icon: 'mdi:shopping' },
        { name: 'CRM', icon: 'mdi:account-group' }
      ]
    },
    {
      title: 'Apps',
      isSubsection: true,
      items: [
        { name: 'Chat', icon: 'mdi:chat' },
        { name: 'Calendar', icon: 'mdi:calendar' },
        { name: 'Email', icon: 'mdi:email' },
        { name: 'Kanban', icon: 'mdi:view-column' },
        { name: 'Contacts', icon: 'mdi:account-box' },
        { name: 'Contacts List', icon: 'mdi:format-list-bulleted', badge: 'New' },
        { name: 'Courses', icon: 'mdi:book' },
        { name: 'Employee', icon: 'mdi:badge-account' },
        { name: 'Notes', icon: 'mdi:note-text' },
        { name: 'Tickets', icon: 'mdi:ticket' },
        { name: 'Invoice', icon: 'mdi:file-document' },
        { name: 'ToDo', icon: 'mdi:format-list-checks' }
      ]
    }
  ];

}

