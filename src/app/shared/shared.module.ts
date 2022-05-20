import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';
import { HeadingComponent } from '../shared/components/heading/heading.component';


@NgModule({
  declarations: [
    SharedComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [SharedComponent,HeadingComponent]
})
export class SharedModule { }
