import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css'],
})
export class CreateUserFormComponent {
  user!: User;
  form!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.userService.createUser(this.form.value).subscribe({
      next: () => {
        alert('Usuário criado com sucesso!');
        this.router.navigate(['']);
      },
    });
  }
}
