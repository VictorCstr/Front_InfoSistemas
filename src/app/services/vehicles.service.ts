import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/Vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = 'http://localhost:8080';

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicle`);
  }

  // remove(id: number) {
  //   return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  // }

  // getAll(): Observable<Animal[]> {
  //   return this.http.get<Animal[]>(this.apiUrl);
  // }

  // getAnimal(id: number): Observable<Animal> {
  //   return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  // }
}
