import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from './tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }

  findall():Observable<Tour[]>{
   return this.http.get<Tour[]>('http://localhost:3000/tours');
  }
}
