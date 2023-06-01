import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicleFormComponent } from './create-vehicle-form.component';

describe('CreateVehicleFormComponent', () => {
  let component: CreateVehicleFormComponent;
  let fixture: ComponentFixture<CreateVehicleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVehicleFormComponent]
    });
    fixture = TestBed.createComponent(CreateVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
