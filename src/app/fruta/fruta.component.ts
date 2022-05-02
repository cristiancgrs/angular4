import { Component } from "@angular/core";

@Component(
    {
        selector:'fruta',
        templateUrl:'./fruta.component.html',
        styleUrls:['./fruta.component.css']
    }
)

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string = 'Cristian Rojas';
    public edad:number = 31;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<any> = ['Programador',31,'CEO'];
    comodin:any = 'cualquier tipo de dato';
}