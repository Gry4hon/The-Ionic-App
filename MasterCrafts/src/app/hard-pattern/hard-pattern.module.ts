import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardPatternPageRoutingModule } from './hard-pattern-routing.module';

import { HardPatternPage } from './hard-pattern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardPatternPageRoutingModule
  ],
  declarations: [HardPatternPage]
})
export class HardPatternPageModule {}
