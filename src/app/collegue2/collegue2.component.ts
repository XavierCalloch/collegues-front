import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue2',
  templateUrl: './collegue2.component.html',
  styleUrls: ['./collegue2.component.css']
})
export class Collegue2Component implements OnInit {

  @Input() col = new Collegue('', '', '', '', null, '');
  msgErreur: string;

  constructor(private _srv: DataService) { }

  ngOnInit(): void {
  }

  creerCollegue(nom: string, prenoms: string, email: string, dateDeNaissance: Date, photoUrl: string) {
    this._srv.creerCollegue(nom, prenoms, email, dateDeNaissance, photoUrl);
  }

}
