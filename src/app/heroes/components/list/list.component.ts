import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroList: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor']
  public deletedHero: string = ''

  removeLastHero():void {
    this.deletedHero = this.heroList.pop() || ''
  }
}
