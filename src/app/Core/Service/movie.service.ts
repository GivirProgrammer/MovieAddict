import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  API_URL="https://localhost:7253/api/Movie";

  API_REQUEST_TOKEN="https://api.themoviedb.org/3/authentication/token/new?api_key=28e603a016a0308ee1b028f4007683e2"

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }),
  };

  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    return  this.http.get<any[]>(this.API_URL);
  }


}
