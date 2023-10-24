import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit{

  constructor (private route: ActivatedRoute){
  }
  identificador: Number = 0;
  phone: String | Number = '';

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        if(params['id'] !== undefined){
          this.identificador = +params['id']
          console.log(this.identificador)
        }
        if(params['phone'] !== undefined){
          this.phone = +params['phone']
          console.log(this.phone)
        }
      }) 
  }
}
