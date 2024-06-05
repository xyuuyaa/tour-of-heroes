import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class DashboardComponent implements OnInit {
  private heroService = inject(HeroService)

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
