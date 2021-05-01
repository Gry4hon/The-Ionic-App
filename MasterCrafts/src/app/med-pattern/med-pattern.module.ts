import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedPatternPageRoutingModule } from './med-pattern-routing.module';

import { MedPatternPage } from './med-pattern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedPatternPageRoutingModule
  ],
  declarations: [MedPatternPage]
})
export class MedPatternPageModule {}
