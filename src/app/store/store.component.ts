import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';

import { AddProductComponent } from './add-product/add-product.component';
import { DataService } from '../shared/services/data.service';
import { IStore } from '../shared/interfaces/i-store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  store: IStore;

  constructor(
    private dataService: DataService,
    private location: Location,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store = this.dataService.getData()[id];
  }

  save(): void {
    this.dataService.saveData();
    this.location.back();
  }

  back(): void {
    this.location.back();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.products.push(result);
      }
    });
  }
}
