import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';

import {MapComponent} from './map.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule {
}
