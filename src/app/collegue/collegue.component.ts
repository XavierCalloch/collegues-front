import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  constructor() { }

  ajouterCollegue() {
    console.log('Création d’un nouveau collègue');
  }

  modifierCollegue() {
    console.log('Modification du collègue');
  }

  ngOnInit(): void {
  }

}