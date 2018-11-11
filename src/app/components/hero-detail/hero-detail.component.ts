import {Component, OnInit } from '@angular/core';
import { Hero } from '../../models/';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private activateRouter: ActivatedRoute, private location: Location, private heroService: HeroService) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activateRouter.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
