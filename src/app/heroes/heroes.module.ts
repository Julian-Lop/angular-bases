import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

// Components
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{

}

