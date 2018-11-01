/// <reference types="@types/googlemaps" />
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DataService } from '../services/data.service';
import { IStore } from '../interfaces/i-store';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  private data: IStore[];
  @Output() pushMap = new EventEmitter<google.maps.Map>();
  map: google.maps.Map;

  constructor(
    private dataService: DataService,
    private mapService: MapService,
  ) {
  }

  ngOnInit() {
    this.data = this.dataService.getData();
    this.map = this.mapService.getMap('map');
    this.pushMap.emit(this.map);
    for (let item of this.data) {
      this.mapService.addMarker(this.map, item.address);
    }
  }
}
