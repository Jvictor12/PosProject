import { Component, OnInit, inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  addressForm!: FormGroup;
  hasUnitNumber!: boolean;

  constructor (
    private fb: FormBuilder,
    private autorizacaoService: AutorizacaoService,
    private service: UserService
  ){}

  ngOnInit() {
     this.hasUnitNumber = false;
     this.buildForm(); 
  }

  buildForm() {
    this.addressForm = this.fb.group({
      email: [null, Validators.compose([
        Validators.required, Validators.minLength(10),Validators.maxLength(30), Validators.email
      ])],
      password: [null, Validators.required]
    })
  }

  email = this.addressForm.controls['email']

  getErrorMessage() {
    if(this.email.hasError('required')){
      return 'O email é obrigatório'
    }
    return this.email.hasError('email') ? 'Email inválido' : '';
  }

  loginClick(){
    if (this.autorizacaoService.obterLoginStatus()) {
      this.autorizacaoService.deslogar()
    } else {
      this.autorizacaoService.autorizar()
    }
  }

  onSubmit(): void {
    if (this.autorizacaoService.obterLoginStatus()) {
      this.autorizacaoService.deslogar()
    } else {
      // this.autorizacaoService.autorizar()
      this.service.login({user: 'fdsfds'}).subscribe({
        next: (response) => {
          console.log(response)
          // alert("Login realizado com sucesso")
          this.autorizacaoService.autorizar()
        },
        error: (err: any) => {
          console.log(err)
          alert("Ocorreu um erro")
        }
      })
    }
  }
}
