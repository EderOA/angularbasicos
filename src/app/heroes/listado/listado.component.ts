import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  heroes: string[] = ['spiderman', 'Ironman','Hulk', 'Thor','Capitan America']
  heroeBorrado: string = '';
  

  borrarHereo(){
        //this.heroes[this.heroes.indexOf('spiderman')]= "";
    const heroeBorrado = this.heroes.shift() || '';
    console.log(heroeBorrado);
    this.heroeBorrado = heroeBorrado;
  }
}
