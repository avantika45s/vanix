import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  vanixLogo = 'assets/images/vanix-logo.svg';
  dropdown = 'assets/images/dropdown.svg';
  touchbutton = 'assets/images/get-in-touch-light.svg';
  evManagementUrl = 'https://testwebsite.vanixtechnologies.com/ev-management';
  assetManagementUrl = 'https://testwebsite.vanixtechnologies.com/asset-management';
  wimUrl = 'https://testwebsite.vanixtechnologies.com/ev-management/wim-150';
  vevUrl= "https://testwebsite.vanixtechnologies.com/ev-management/Vev-X1";
  atmUrl= "https://testwebsite.vanixtechnologies.com/asset-management/atm-150";
  trackUrl= "https://testwebsite.vanixtechnologies.com/asset-management/tracX-1";
  bleUrl= "https://testwebsite.vanixtechnologies.com/asset-management/ble-gateway";
  contactUrl= "https://vanixtechnologies.com/contact-us/";
 
}
