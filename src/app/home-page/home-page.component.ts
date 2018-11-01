/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddStoreComponent } from './add-store/add-store.component';
import { DataService } from '../shared/services/data.service';
import { IStore } from '../shared/interfaces/i-store';
import { MapService } from '../shared/services/map.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  private map: google.maps.Map;
  data: IStore[];

  constructor(
    private dataService: DataService,
    private mapService: MapService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataService.initStartData();
    this.data = this.dataService.getData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStoreComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.data[this.data.length - 1].id + 1;
        this.data.push(result);
        this.dataService.saveData(this.data);
        this.mapService.addMarker(this.map, result.address);
      }
    });
  }

  getMap($event) {
    this.map = $event;
  }
}
