import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor ( private route: ActivatedRoute, private heroService: HeroService, private location: Location){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() : void{
    this.location.back();
  }

  save() :void {
    if(this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }
}
