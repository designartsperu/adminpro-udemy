import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('Termino!', mensaje)
    )
    .catch(error => console.error('Error en la promesa', error));

   } // fin constructor /

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    // tslint:disable-next-line:prefer-const
    return new Promise((resolve, reject) => {

      let contador = 0;
      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve(true);
          // reject('simplemente un error');
          clearInterval(intervalo);
        }

      }, 1000);

    });
  }

}
