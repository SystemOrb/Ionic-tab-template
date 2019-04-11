import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeClass } from '../classes/personaje.class';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  personaje: PersonajeClass;
  constructor(private Params: ActivatedRoute, private _router: Router) {
    this.Params.queryParams.subscribe(
      (get: PartialObserver<any> | any): void => {
        if (get) {
          this.personaje = get;
          if (this.personaje.nombre && this.personaje.images) {
            console.log('queda');
          } else {
            this._router.navigate(['/info']);
            console.log('sin param');
            return;
          }
        }
      }
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  toRoot() {
    this._router.navigate(['/tabs/tab1']);
  }
}
