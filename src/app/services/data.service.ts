import { Injectable } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercher() {
    return matriculesMock;
  }

  rechercherParNom(nom: string): string[] {
    let tab: string[];
    for (const m of matriculesMock) {
      if (m.nom === nom) {
        tab.push(m.nom);
      }
    }
    return tab;
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}
