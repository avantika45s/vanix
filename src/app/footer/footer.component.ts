import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  links = [
    { label: 'About us', url: 'https://testwebsite.vanixtechnologies.com/about-us' },
    { label: 'Case Studies', url: 'https://testwebsite.vanixtechnologies.com/case-studies' },
    { label: 'FAQs', url: 'https://testwebsite.vanixtechnologies.com/faqs' }
  ];

  links2 = [
    { label: 'Press', url: 'https://testwebsite.vanixtechnologies.com/press' },
    { label: 'Events', url: 'https://testwebsite.vanixtechnologies.com/events' },
    { label: 'Blogs', url: 'https://testwebsite.vanixtechnologies.com/blogs' }
  ];

  divisions = [
    { label: 'EV Management →', url: 'https://testwebsite.vanixtechnologies.com/ev-management' },
    { label: 'Asset Management →', url: 'https://testwebsite.vanixtechnologies.com/asset-management' }
  ];

  contactAddress = `Office 17, 8th Floor, Vasavi Skycity, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana, 500081`;

  socialLinks = [
    { url: 'https://www.youtube.com/@vanixtechnologiesofficial', icon: '/assets/images/youtube.svg', alt: 'YouTube' },
    { url: 'https://www.instagram.com/vanixtechnologies/', icon: '/assets/images/instagram.svg', alt: 'Instagram' },
    { url: 'https://www.linkedin.com/company/vanixtechnologies/?originalSubdomain=in', icon: '/assets/images/linkedin.svg', alt: 'LinkedIn' }
  ];

  showMap = false;
  map: L.Map | undefined;

  // Coordinates for the organization
  latitude = 17.4435;     // Gachibowli Latitude
  longitude = 78.3772;    // Gachibowli Longitude

  ngOnInit(): void {}

  toggleMap(): void {
    this.showMap = !this.showMap;

    setTimeout(() => {
      if (this.showMap) {
        if (this.map) {
          this.map.invalidateSize();
          this.map.remove();         
          this.map = undefined;      
        }
        this.initMap();             
      }
    }, 0);
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([this.latitude, this.longitude])
      .addTo(this.map)
      .bindPopup('Vanix Technologies')
      .openPopup();
  }
}
