import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = [
    { label: 'About us', url: 'https://testwebsite.vanixtechnologies.com/about-us' },
    { label: 'Case Studies', url: 'https://testwebsite.vanixtechnologies.com/case-studies' },
    { label: 'FAQs', url: 'https://testwebsite.vanixtechnologies.com/faqs' }
  ];

  links2 =[
    { label: 'Press', url: 'https://testwebsite.vanixtechnologies.com/press' },
    { label: 'Events', url: 'https://testwebsite.vanixtechnologies.com/events' },
    { label: 'Blogs', url: 'https://testwebsite.vanixtechnologies.com/blogs' }
  ];

  divisions = [
    { label: 'EV Management →', url: 'https://testwebsite.vanixtechnologies.com/ev-management'},
    { label: 'Asset Management →', url: 'https://testwebsite.vanixtechnologies.com/asset-management'}
  ];

  contactAddress = `Office 17, 8th Floor, Vasavi Skycity, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana, 500081`;

socialLinks = [
  { url: 'https://www.youtube.com/@vanixtechnologiesofficial', icon: '/assets/images/youtube.svg', alt: 'YouTube'},
  { url: 'https://www.instagram.com/vanixtechnologies/', icon: '/assets/images/instagram.svg', alt: 'Instagram' },
  { url: 'https://www.linkedin.com/company/vanixtechnologies/?originalSubdomain=in', icon: '/assets/images/linkedin.svg', alt: 'LinkedIn' }
];

  
  
}
