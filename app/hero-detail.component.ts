/**
 * Created by thomas on 05/10/16.
 */
// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl: 'hero-detail.component.html',

})
export class HeroDetailComponent implements OnInit{
  private hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }



  goBack(): void {
      this.location.back();
  }

}
