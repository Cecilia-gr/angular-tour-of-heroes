import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';
// import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent{

  heroes : Hero[] = [];
  selectedHero?: Hero;


  constructor(private heroService : HeroService, private messageService : MessageService) {}

  ngOnInit() :void{
    this.getHeroes();
  }

  onSelect(hero : Hero) :void{
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
