import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

     this.contarTres().then(
      mensaje => console.log('termino!', mensaje)
    )
     /* () => console.log('Error')  un forma de hacerlo */
      .catch( error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {

      let contador = 0;
     const intervalo = setInterval( () => {

        contador += 1;
        console.log( contador );

        if ( contador === 3 ) {
          resolve( true );
         /* resolve(); manejando el resolver*/
         // reject('simplemente un error');
          clearInterval(intervalo);
        }

      }, 1000 );
    });
  }
}
