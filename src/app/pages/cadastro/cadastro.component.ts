import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    firstName: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50)
    ])],
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(30)
    ])],
    phone: [null, Validators.required],
    password: [null, Validators.required]
  });

  onSubmit(): void {
    alert('Entrou no OnSubmit');
  }
}
