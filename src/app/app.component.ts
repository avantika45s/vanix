// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { SectionComponent } from './section/section.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { Section2Component } from './section2/section2.component';
// import { Section3Component } from './section3/section3.component';
// import { Section4Component } from './section4/section4.component';
// import { Section5Component } from './section5/section5.component';
// import { Section6Component } from './section6/section6.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, SectionComponent, HeaderComponent, FooterComponent, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'vanix-app';
// }











import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    SectionComponent,
    HeaderComponent,
    FooterComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'vanix-app';
}

