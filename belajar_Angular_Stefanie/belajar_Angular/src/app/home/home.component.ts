import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Citra Grand City",
      city: "Palembang",
      state: "ID",
      photo: "https://athome.id/wp-content/uploads/2018/12/Main-Gate-CitraGrand-City-1.jpg",
      availableUnits : 12,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "Citra Land",
      city: "Palembang",
      state: "ID",
      photo: "https://citralandpalembang.com/wp-content/uploads/2020/08/onega-1-lebar-12m-2-1024x817.jpg.webp",
      availableUnits : 12,
      wifi: true,
      laundry: true
    }
  ]
}
