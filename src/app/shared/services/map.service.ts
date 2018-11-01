/// <reference types="@types/googlemaps" />
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  geocoder = new google.maps.Geocoder();

  constructor() {
  }

  addMarker(resultsMap, address) {
    this.geocoder.geocode({'address': address}, function (results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        return new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        return false;
      }
    });
  }

  getMap(id: string): google.maps.Map {
    return new google.maps.Map(document.getElementById(id), {
      zoom: 11,
    });
  }
}
