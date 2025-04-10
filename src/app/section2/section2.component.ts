import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
  evi= 'https://testwebsite.vanixtechnologies.com/ev-management';
  tooli= 'assets/images/tool-icon.svg';
  tracking= 'assets/images/assets-tracking.svg';
  management= 'https://testwebsite.vanixtechnologies.com/asset-management';
  eimg= 'assets/images/ev-image.svg';
}
