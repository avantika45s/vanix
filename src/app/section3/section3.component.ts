import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {
  features = [
    {
      title: 'AI+IoT Innovation',
      description: 'Cutting-Edge Telematics for Optimized Performance & Control.',
      imgSrc: 'assets/images/aiiot-icon.svg',
      alt: 'AI IoT Icon',
  
    },
    {
      title: 'Proven Accuracy',
      description: 'Trusted Analytics for Better Monitoring & Management.',
      imgSrc: 'assets/images/accuracy.svg',
      alt: 'Accuracy Icon',
     
    },
    {
      title: 'Global Compliance',
      description: 'Industry-Compliant Telematics for Safe & Efficient Management.',
      imgSrc: 'assets/images/globle_compliance.svg',
      alt: 'Compliance Icon',
      
    },
  ];
  
}
