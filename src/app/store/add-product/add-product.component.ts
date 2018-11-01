import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { IProduct } from '../../shared/interfaces/i-product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  data: IProduct = {
    name: null,
    description: null,
    price: null
  };

  constructor(public dialogRef: MatDialogRef<AddProductComponent>) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
