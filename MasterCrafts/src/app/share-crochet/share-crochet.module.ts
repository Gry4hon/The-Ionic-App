import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareCrochetPageRoutingModule } from './share-crochet-routing.module';

import { ShareCrochetPage } from './share-crochet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareCrochetPageRoutingModule
  ],
  declarations: [ShareCrochetPage]
})
export class ShareCrochetPageModule {}
