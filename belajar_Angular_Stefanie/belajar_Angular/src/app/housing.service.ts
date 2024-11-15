import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
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
  constructor() { }

  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number) : HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
}
