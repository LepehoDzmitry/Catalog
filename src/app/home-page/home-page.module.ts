import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AddStoreComponent } from './add-store/add-store.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomePageComponent } from './home-page.component';
import { MapModule } from '../shared/map/map.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MapModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
  ],
  declarations: [
    AddStoreComponent,
    HomePageComponent,
  ],
  exports: [
    HomePageComponent,
  ],
  entryComponents: [
    AddStoreComponent,
  ]
})
export class HomePageModule {
}
