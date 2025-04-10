import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.css'
})
export class Section6Component {
  amdTechDayLink: string = 'https://testwebsite.vanixtechnologies.com/events';
  greenExpoLink: string = 'https://testwebsite.vanixtechnologies.com/events';
  londonTechWeekLink: string = 'https://testwebsite.vanixtechnologies.com/events';
  greenExpoImg: string = 'assets/images/greenday.webp';
  amdTechDayImg: string = 'assets/images/amdtechday.svg';
  londonTechWeekImg: string = 'assets/images/london.svg';
}
