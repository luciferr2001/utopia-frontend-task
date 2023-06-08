import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('menu', { read: ElementRef, static: false }) menu: ElementRef;
  @ViewChild('overlay', { read: ElementRef, static: false }) overlay: ElementRef;

  toggle() {
    if (this.menu.nativeElement.classList.contains("active")) {
      this.menu.nativeElement.classList.remove("active");
      this.overlay.nativeElement.classList.remove("enabled");
    }
    else {
      this.menu.nativeElement.classList.add("active");
      this.overlay.nativeElement.classList.add("enabled");
    }
  }

  open(){
    this.menu.nativeElement.classList.add("active");
    this.overlay.nativeElement.classList.add("enabled");
  }

  close(){
    this.menu.nativeElement.classList.remove("active");
    this.overlay.nativeElement.classList.remove("enabled");
  }
}
