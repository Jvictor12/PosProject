import { Component, OnInit, inject } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';


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
    private autorizacaoService: AutorizacaoService
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
    alert('Thanks!');
    this.loginClick();
  }
}
