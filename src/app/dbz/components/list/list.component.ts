import { Component, EventEmitter, Input, Output } from '@angular/core';

//Interfaces
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter()

  public onDeleteCharacter(id: string): void {
    this.onDeleteId.emit(id)
  }
}
