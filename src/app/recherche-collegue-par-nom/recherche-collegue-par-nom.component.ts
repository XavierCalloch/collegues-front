import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  modeRecherche = false;

  listeMatricules = [];

  constructor(private _srv: DataService) { }

  rechercher(nom: string) {
    this.modeRecherche = true;
    console.log('Recherche d\'un collègue par nom');
    this._srv.rechercherParNom(nom)
      .subscribe(
        listMat => this.listeMatricules = listMat,
        err => console.log('Pas de résultat. Veuillez entrer un autre nom'));
  }

  selectMatricule(matricule: string) {
    this._srv.selectCollegueParMatricule(matricule)
      .subscribe(col => {},
        err => {});
  }

  ngOnInit(): void {
  }

}
