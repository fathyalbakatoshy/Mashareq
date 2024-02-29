import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonPosition: boolean = false; // تعريف buttonPosition وتعيين القيمة الافتراضية بقيمة أقل من 100vh

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update button position based on scroll
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > window.innerHeight) {
      this.buttonPosition = true; // Show button after scrolling 100vh
    } else {
      this.buttonPosition = false; // Hide button before scrolling 100vh
    }
  }

  goToUP() {
    window.scrollTo(0, 0);
  }
}
