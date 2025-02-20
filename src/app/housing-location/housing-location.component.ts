import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ["./housing-location.component.css"]
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;  // notice @ and () covering the Input
}
