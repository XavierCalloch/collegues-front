import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  modeRecherche = false;

  @Input() matricules: Collegue[];

  constructor() { }

  rechercher() {
    this.modeRecherche = true;
    console.log('Recherche d\'un collègue par nom');
  }

  ngOnInit(): void {
  }

}
