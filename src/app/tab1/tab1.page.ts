import { Component, OnInit } from '@angular/core';
import { PersonajeClass } from '../classes/personaje.class';
import { PERSONAJES } from '../classes/personajes.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public Personajes: PersonajeClass[] = PERSONAJES.slice(0);
  constructor(private _router: Router) {
  }

  ngOnInit() {
  }
  ToInfoPage(personaje: PersonajeClass): void {
    this._router.navigate(['/tabs/tab2'], {
      queryParams: personaje
    });
  }
}
