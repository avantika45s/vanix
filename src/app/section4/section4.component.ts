import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.css'
})
export class Section4Component {
  logosRow1 = [
    { src: 'assets/images/sai_w3.svg', alt: 'SAIW3' },
    { src: 'assets/images/excel_point.svg', alt: 'Excelpoint' },
    { src: 'assets/images/AMD.svg', alt: 'AMD' },
    { src: 'assets/images/NVDIA.svg', alt: 'NVIDIA' },
    { src: 'assets/images/dpiit.svg', alt: 'DPIIT' },
  ];
  
  logosRow2 = [
    { src: 'assets/images/cIIE.svg', alt: 'CIIE' },
    { src: 'assets/images/GTU.svg', alt: 'GTU Innovation' },
    { src: 'assets/images/Atal.svg', alt: 'Atal Incubation' },
    { src: 'assets/images/AWS.svg', alt: 'AWS' },
  ];
}
