import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componets/principal/principal.component';
import { InicioComponent } from './componets/principal/inicio/inicio.component';
import { PrincipiosComponent } from './componets/principal/principios/principios.component';
import { PalaciodessabiduriaComponent } from './componets/principal/palaciodessabiduria/palaciodessabiduria.component';
import { SietevotosComponent } from './componets/principal/sietevotos/sietevotos.component';
import { ConsejosDeSabiduriaComponent } from './componets/principal/consejos-de-sabiduria/consejos-de-sabiduria.component';
import { MatrizResultadoComponent } from './componets/principal/matriz-resultado/matriz-resultado.component';
import { MatrizSeguimientoComponent } from './componets/principal/matriz-seguimiento/matriz-seguimiento.component';
import { NavbarComponent } from './componets/principal/navbar/navbar.component';
import { ComunicacionComponent } from './componets/principal/principios/comunicacion/comunicacion.component';
import { ComprenderComponent } from './componets/principal/principios/comprender/comprender.component';
import { MotivarComponent } from './componets/principal/principios/motivar/motivar.component';
import { JusticiaComponent } from './componets/principal/principios/justicia/justicia.component';
import { CriticaComponent } from './componets/principal/principios/critica/critica.component';
import { PerdonComponent } from './componets/principal/principios/perdon/perdon.component';
import { ConfiarComponent } from './componets/principal/principios/confiar/confiar.component';
import { IntegridadComponent } from './componets/principal/principios/integridad/integridad.component';
import { EmpoderamientoComponent } from './componets/principal/principios/empoderamiento/empoderamiento.component';
import { HeaderInicioComponent } from './componets/principal/header/header-inicio/header-inicio.component';
import { HeaderPrincipioComponent } from './componets/principal/header/header-principio/header-principio.component';
import { HeaderPalacioComponent } from './componets/principal/header/header-palacio/header-palacio.component';
import { HeaderVotosComponent } from './componets/principal/header/header-votos/header-votos.component';
import { HeaderConsejoComponent } from './componets/principal/header/header-consejo/header-consejo.component';
import { HeaderResultadoComponent } from './componets/principal/header/header-resultado/header-resultado.component';
import { HeaderSeguimientoComponent } from './componets/principal/header/header-seguimiento/header-seguimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InicioComponent,
    PrincipiosComponent,
    PalaciodessabiduriaComponent,
    SietevotosComponent,
    ConsejosDeSabiduriaComponent,
    MatrizResultadoComponent,
    MatrizSeguimientoComponent,
    NavbarComponent,
    ComunicacionComponent,
    ComprenderComponent,
    MotivarComponent,
    JusticiaComponent,
    CriticaComponent,
    PerdonComponent,
    ConfiarComponent,
    IntegridadComponent,
    EmpoderamientoComponent,
    HeaderInicioComponent,
    HeaderPrincipioComponent,
    HeaderPalacioComponent,
    HeaderVotosComponent,
    HeaderConsejoComponent,
    HeaderResultadoComponent,
    HeaderSeguimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
