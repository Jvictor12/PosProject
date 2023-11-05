import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/comum/validator';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user: User = new User();
  addressForm = this.fb.group({
    firstName: ['', Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50)
    ])],
    email: ['', Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(50)
    ])],
    cpf: ['', Validators.compose([
      Validators.required, GenericValidator.isValidCPF()
    ])],
    phone: ['', Validators.required],
    password: ['', Validators.required]
  });

  email = this.addressForm.controls['email']

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O email é obrigatório'
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

  constructor(private fb: FormBuilder){

  }

  onSubmit(): void {
    this.user.id = '1'
    if(this.addressForm.controls['firstName'].value)
    this.user.name = this.addressForm.controls['firstName'].value
    if(this.addressForm.controls['phone'].value)
    this.user.phone = this.addressForm.controls['phone'].value
    if(this.addressForm.controls['email'].value)
    this.user.email = this.addressForm.controls['email'].value
    if(this.addressForm.controls['password'].value)
    this.user.password = this.addressForm.controls['password'].value
    alert('Voce cadastrou')
    console.log(this.user)
    localStorage.setItem('user', JSON.stringify(this.user))
  }
}
