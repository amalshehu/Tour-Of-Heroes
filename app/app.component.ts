import { Component } from '@angular/core';

export class Hero{
  id:number;
  name:string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Superman' },
  { id: 12, name: 'Batman' },
  { id: 13, name: 'Deadpool' },
  { id: 14, name: 'Heman' },
  { id: 15, name: 'Wolverine' },
  { id: 16, name: 'Magneto' },
  { id: 17, name: 'Captain America' },
  { id: 18, name: 'Spiderman' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template:`
  <div *ngIf = "selectedHero">
    <h1>{{title}}</h1>
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)] = "selectedHero.name"placeholder = "name">
    <div>
    </div>
    <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" (click) = "onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      `
,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})
export class AppComponent {
  heroes = HEROES;
  title = 'Tour of heroes';
  selectedHero:Hero;
  onSelect(hero: Hero):
    void {
         this.selectedHero = hero;
         }

 }
