import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Gráficas', url: '/grafica1'},
        {titulo: 'Promesas', url: '/promesas'},
        {titulo: 'Rxjs', url: '/rxjs'}
      ]
    },
    {
      titulo: 'RR.HH.',
      icono: 'mdi mdi-calendar',
      submenu: [
        {titulo: 'Permiso', url: '/permiso'},
        {titulo: 'Vacaciones', url: '/vacaciones'}
      ]
    }
  ];

  constructor() { }
}
