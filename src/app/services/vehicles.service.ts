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

  getSingleVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicle/${id}`);
  }

  // remove(id: number) {
  //   return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  // }
}
