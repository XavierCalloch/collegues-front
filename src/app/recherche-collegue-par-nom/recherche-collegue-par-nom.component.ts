import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  modeRecherche = false;

  @Input() matricules: Collegue[];

  constructor(private _srv: DataService) { }

  rechercher(nom: string) {
    this.modeRecherche = true;
    console.log('Recherche d\'un collègue par nom');
    this._srv.rechercherParNom(nom);
  }

  ngOnInit(): void {
  }

}
