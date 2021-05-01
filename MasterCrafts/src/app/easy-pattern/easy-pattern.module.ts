import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyPatternPageRoutingModule } from './easy-pattern-routing.module';

import { EasyPatternPage } from './easy-pattern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyPatternPageRoutingModule
  ],
  declarations: [EasyPatternPage]
})
export class EasyPatternPageModule {}
