import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueEnCours = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  abonnementCollegueEnCours(): Observable<Collegue> {
    return this.subCollegueEnCours.asObservable();
  }

  selectionnerCollegue(col: Collegue) {
    // publier le collègue dans notre page
    this.subCollegueEnCours.next(col);
  }

  rechercherParNom(nom: string): Observable<string[]> {
    // GET /collegues?nom=XXX
    return this.http.get<string[]>(`https://digicapi.herokuapp.com/collegues?nom=${nom}`);
  }

  selectCollegueParMatricule(matricule: string): Observable<Collegue> {
    const obsCollegue = this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/${matricule}`);
    obsCollegue.subscribe(collegue => this.subCollegueEnCours.next(collegue));
    return obsCollegue;
  }

}
