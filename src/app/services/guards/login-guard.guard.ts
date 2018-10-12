import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(
    public _usuarioService: UsuarioService,
    public _router: Router
    ) {}

  canActivate() {

    if ( this._usuarioService.estaLogueado() ) {
      console.log('Paso el Login Guard');
      return true;
    } else {
      console.log('Bloqueado por Guard');
      this._router.navigate(['/login']);
      return false;
    }

  }
}
