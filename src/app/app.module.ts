import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { CategoriasComponent } from './componentes/paginas/categorias/categorias.component';
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { HistorialComprasComponent } from './componentes/paginas/historial-compras/historial-compras.component';
import { ProcesarPagoComponent } from './componentes/paginas/procesar-pago/procesar-pago.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';
import { InicioSesionComponent } from './componentes/usuario/inicio-sesion/inicio-sesion.component';
import { ActualizarDatosComponent } from './componentes/usuario/actualizar-datos/actualizar-datos.component';
import { AdministracionComponent } from './componentes/paginas/administracion/administracion.component';
import { PaginaNoEncontradaComponent } from './componentes/paginas/pagina-no-encontrada/pagina-no-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriasComponent,
    CarritoComponent,
    HistorialComprasComponent,
    ProcesarPagoComponent,
    RegistroComponent,
    InicioSesionComponent,
    ActualizarDatosComponent,
    AdministracionComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
