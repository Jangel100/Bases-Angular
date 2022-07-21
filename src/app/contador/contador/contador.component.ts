import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html'
})
export class contadorComponent{

//sumas de uno en uno
numero:number=10;
sumar(){
  this.numero++;
}
restar(){
  this.numero--;
}
acumular(valor:number){
    this.numero+=valor;
}


//Acumulado de 5 ne 5
acumular2(valor:number){
  this.numero2+=valor;
}
base:number=5;
numero2:number=5;

}