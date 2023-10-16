import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'json', component: ManipulandoJsonComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
