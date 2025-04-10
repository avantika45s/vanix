import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css'],
})
export class Section5Component {
  currentSlide = 0;

  slides = [
    {
      title: 'Karo Startup',
      text: 'We have been very impressed by the passion and diligence of the Vanix team. Their understaing of the hardware-software optimization surpassed our expectations.',
    },
    {
      title: 'T-Hub',
      text: "T-Hub's semiconductor program showcased 10 startups, raising Rs.6 crore and driving innovations in IC design, fabrication, and next-gen technology",
    },
    {
      title: 'Silicon India',
      text: "Dr. Mandhatya Singh of Vanix leads in AI-driven hardware, pushing India's tech frontier with groundbreaking solutions and cutting-edge innovation.",
    },
    {
      title: "What's Your Startup",
      text: "Vanix shared its innovation journey and solutions in an engaging feature on the instagram reel series, What's Your Startup."
    },
  ];

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
