import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeLink: string = '';
  isMenuOpen: boolean = false;

  setActive(link: string) {
    this.activeLink = link;
    this.closeMenu(); 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'; 
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto'; 
  }

  navigateToSection(event: Event) {
    event.preventDefault(); 
    const target = (event.target as HTMLAnchorElement).getAttribute('href');
    if (target) {
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }  
}
