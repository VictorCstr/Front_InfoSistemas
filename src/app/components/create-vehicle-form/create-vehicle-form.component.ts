import { Component, ViewChild } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle-form',
  templateUrl: './create-vehicle-form.component.html',
  styleUrls: ['./create-vehicle-form.component.css'],
})
export class CreateVehicleFormComponent {
  constructor(
    private vehicleService: VehiclesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  form!: FormGroup;

  createForm(): void {
    this.form = this.formBuilder.group({
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      chassi: ['', [Validators.required]],
      renavam: ['', [Validators.required]],
    });
  }

  log() {
    console.log(this.form.value);
  }

  createVehicle(): void {
    this.vehicleService.createVehicle(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/painel']);
      },
    });
  }
}
