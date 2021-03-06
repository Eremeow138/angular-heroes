import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models';
import { HeroService } from 'src/app/services';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private activateRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
