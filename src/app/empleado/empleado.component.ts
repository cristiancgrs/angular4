import { Component } from "@angular/core";

@Component(
    {
        selector:'empleado-tag',
        templateUrl:'./empleado.component.html',
        styleUrls:['./empleado.component.css']
    }
)

export class EmpleadoComponent{
    public nombre_componente = 'Componente de empleados';
    public listado_empleado = 'Juan, Carlos, Maria y Ana';
}