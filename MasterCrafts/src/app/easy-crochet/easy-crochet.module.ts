import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyCrochetPageRoutingModule } from './easy-crochet-routing.module';

import { EasyCrochetPage } from './easy-crochet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyCrochetPageRoutingModule
  ],
  declarations: [EasyCrochetPage]
})
export class EasyCrochetPageModule {}
