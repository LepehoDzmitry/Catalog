import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { IStore } from '../../shared/interfaces/i-store';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.sass']
})
export class AddStoreComponent implements OnInit {
  data: IStore = {
    id: 0,
    name: '',
    address: '',
    operationMode: '',
    products: [
      {
        name: '',
        description: '',
        price: 0
      }
    ]
  };

  constructor(public dialogRef: MatDialogRef<AddStoreComponent>) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
