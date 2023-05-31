import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent {
  constructor(private service: VehiclesService, private route: ActivatedRoute) {
    this.getDetails();
  }
  vehicle!: Vehicle;

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getSingleVehicle(id as string).subscribe((vehicle) => {
      this.vehicle = vehicle;
    });
  }
}
