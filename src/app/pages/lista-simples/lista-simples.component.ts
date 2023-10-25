import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-simples',
  templateUrl: './lista-simples.component.html',
  styleUrls: ['./lista-simples.component.css']
})
export class ListaSimplesComponent implements OnInit{

  constructor(private router: Router, public service: UserService){
  }
  users: User[] = []

  ngOnInit(): void {
      this.getUsers()
  }
  getUsers(): void {
    this.service.getUsers().subscribe({
      next: (response) => {
          console.log(response)
          this.users = response
      },
      error: (err: any) => {
          console.log("Ocorreu um erro")
          console.log(err)
      }
    })
  }
  goToDetail(user: User){
    this.router.navigate([`detalhe/${user.id}/${user.phone}`])
  }
}
