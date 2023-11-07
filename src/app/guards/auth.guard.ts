import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProductoComponent } from '../producto/pages/producto/producto.component';
export const authGuard: CanActivateFn = (route, state) => {
  console.log(1);
  const router = inject(Router);
  const token = localStorage.getItem("token_access");
  if(!token){
    router.navigate([ProductoComponent]);
    return false
  }
  return true;
};
