import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AutorizacaoService } from '../services/autorizacao.service';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  
  const autorizacaoService = inject(AutorizacaoService)
  const router = inject(Router)
  
  if(autorizacaoService.obterLoginStatus()){
    return true;
  }
  router.navigate(['/login'])
  return false;
};
