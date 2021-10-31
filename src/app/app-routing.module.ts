import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./componets/principal/inicio/inicio.component";
import { PrincipiosComponent } from "./componets/principal/principios/principios.component";
import { PalaciodessabiduriaComponent } from "./componets/principal/palaciodessabiduria/palaciodessabiduria.component";
import { SietevotosComponent } from "./componets/principal/sietevotos/sietevotos.component";
import { ConsejosDeSabiduriaComponent } from "./componets/principal/consejos-de-sabiduria/consejos-de-sabiduria.component";
import { MatrizResultadoComponent } from "./componets/principal/matriz-resultado/matriz-resultado.component";
import { MatrizSeguimientoComponent } from "./componets/principal/matriz-seguimiento/matriz-seguimiento.component";
import {ComunicacionComponent} from "./componets/principal/principios/comunicacion/comunicacion.component";
import {ComprenderComponent} from "./componets/principal/principios/comprender/comprender.component";
import {MotivarComponent} from "./componets/principal/principios/motivar/motivar.component";
import {JusticiaComponent} from "./componets/principal/principios/justicia/justicia.component";
import {CriticaComponent} from "./componets/principal/principios/critica/critica.component";
import {PerdonComponent} from "./componets/principal/principios/perdon/perdon.component";
import {ConfiarComponent} from "./componets/principal/principios/confiar/confiar.component";
import {IntegridadComponent} from "./componets/principal/principios/integridad/integridad.component";
import {EmpoderamientoComponent} from "./componets/principal/principios/empoderamiento/empoderamiento.component";

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'Principio',
    component: PrincipiosComponent
  },
  {
    path: 'Palacio de Sabiduria',
    component: PalaciodessabiduriaComponent
  },
  {
    path: 'Los 7 Votos del Exito',
    component: SietevotosComponent
  },
  {
    path: 'Consejo de Sabiduria',
    component: ConsejosDeSabiduriaComponent
  },
  {
    path: 'Matriz de Resultado',
    component: MatrizResultadoComponent
  },
  {
    path: 'Matriz de Seguimiento',
    component: MatrizSeguimientoComponent
  },
  {
    path: 'Principio de Comunicación',
    component: ComunicacionComponent
  },
  {
    path: 'Principio de Comprender a las Personas',
    component: ComprenderComponent
  },
  {
    path: 'Pincipio de Motivar a las personas',
    component: MotivarComponent
  },
  {
    path: 'Principio de Justicia',
    component: JusticiaComponent
  },
  {
    path: 'Principio de la Critica',
    component: CriticaComponent
  },
  {
    path: 'Principio del Perdón',
    component: PerdonComponent
  },
  {
    path: 'Principio de Confiar en Dios',
    component: ConfiarComponent
  },
  {
    path: 'Principio de Integridad',
    component: IntegridadComponent
  },
  {
    path: 'Principio de Empoderamiento',
    component: EmpoderamientoComponent
  },
  {
    path: 'full',
    redirectTo: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
