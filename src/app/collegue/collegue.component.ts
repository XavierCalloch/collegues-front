import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collegueMock } from '../mock/collegues.mock';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  modeCreation = false;
  modeModification = false;

  @Input() col: Collegue;

  constructor(private _srv: DataService) { }

  ajouterCollegue() {
    console.log('Création d’un nouveau collègue');
    this.modeCreation = true;
    this.modeModification = false;
  }

  modifierCollegue() {
    console.log('Modification du collègue');
    this.modeCreation = false;
    this.modeModification = true;
  }

  validerCollegue() {
    console.log('Validation de la modification du collègue');
  }

  recupererCollegueCourant() {
    this.col = this._srv.recupererCollegueCourant();
  }

  ngOnInit(): void {
  }

}
