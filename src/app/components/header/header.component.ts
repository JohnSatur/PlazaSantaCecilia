import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @HostBinding('class.show-menu') showMenu: boolean = false;

  @HostListener('window:scroll', ['$event'])
  scrollHeader() {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header?.classList.add('bg-header') : header?.classList.remove('bg-header');
  }

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}
