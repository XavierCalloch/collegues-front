import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

// Options de la requête HTTP
// ici le corps de la requête sera du JSON
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

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

  /* selectCollegueParMatricule(matricule: string): Observable<Collegue> {
    const obsCollegue = this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/${matricule}`);
    obsCollegue.subscribe(collegue => this.subCollegueEnCours.next(collegue));
    return obsCollegue;
  } */

  selectCollegueParMatricule(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/${matricule}`)
      .pipe(tap(collegue => this.subCollegueEnCours.next(collegue)));
  }

  creerCollegue(nom: string, prenoms: string, email: string, dateDeNaissance: Date, photoUrl: string) {
    // Envoi de la requête POST
    this.http
      .post(
        // url d'accès au service
        'https://digicapi.herokuapp.com/collegues',

        // corps de la requête
        {
          nom,
          prenoms,
          email,
          dateDeNaissance,
          photoUrl
        },

        // options de la requête HTTP
        httpOptions
      )
      .subscribe((data: any) => {
        console.log(data);
      }, (error: HttpErrorResponse) => {
        console.log('error', error);
      });
  }

}
