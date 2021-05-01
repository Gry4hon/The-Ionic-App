import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedCrochetPageRoutingModule } from './saved-crochet-routing.module';

import { SavedCrochetPage } from './saved-crochet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedCrochetPageRoutingModule
  ],
  declarations: [SavedCrochetPage]
})
export class SavedCrochetPageModule {}
