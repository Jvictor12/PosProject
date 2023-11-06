import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/comum/validator';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user: User = new User();
  addressForm = this.fb.group({
    name: ['', Validators.compose([
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

  constructor(private fb: FormBuilder, private service: UserService){

  }

  onSubmit(): void {
    this.user.id = '1'
    if(this.addressForm.controls['name'].value)
    this.user.name = this.addressForm.controls['name'].value
    if(this.addressForm.controls['phone'].value)
    this.user.phone = this.addressForm.controls['phone'].value
    if(this.addressForm.controls['email'].value)
    this.user.email = this.addressForm.controls['email'].value
    if(this.addressForm.controls['cpf'].value)
    this.user.cpf = this.addressForm.controls['cpf'].value
    if(this.addressForm.controls['password'].value)
    this.user.password = this.addressForm.controls['password'].value
    alert('Voce cadastrou')
    console.log(this.user)
    // localStorage.setItem('user', JSON.stringify(this.user))

    this.service.addUser(this.user).subscribe({
      next: (response) => {
        console.log(response)
        alert('dado registrado com sucesso!')
      },
      error: (erro: any) => {
        console.log(erro)
        alert('Ocorreu um erro')
      }
    })
  }
}
