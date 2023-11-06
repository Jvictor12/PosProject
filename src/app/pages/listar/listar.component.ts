import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<User>;
  dataSource = new MatTableDataSource <User>([]);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone', 'cpf'];

  constructor (private service: UserService){}

  users: User[] = []

  ngOnInit(): void {
      this.getUsers()
  }
  getUsers(): void {
    this.service.getUsers().subscribe({
      next: (response) => {
          console.log(response)
          this.dataSource = new MatTableDataSource <User> (response)
      },
      error: (err: any) => {
          console.log("Ocorreu um erro")
          console.log(err)
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
