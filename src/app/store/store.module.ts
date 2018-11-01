import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from '../app-routing.module';
import { StoreComponent } from './store.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
  ],
  declarations: [
    AddProductComponent,
    StoreComponent,
  ],
  entryComponents: [
    AddProductComponent
  ]
})
export class StoreModule {
}
