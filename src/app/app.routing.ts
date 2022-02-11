import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes

import { HomeComponent } from "./home/home.component";
import { AltaComponent } from "./alta/alta.component";
import { ReporteComponent } from "./reporte/reporte.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { AltaComisionComponent } from "./alta-comision/alta-comision.component";
import { SeguimientoComponent } from "./seguimiento/seguimiento.component";
import { OrdenDiaComponent } from "./orden-dia/orden-dia.component";


const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'alta', component: AltaComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'alta_comision', component: AltaComisionComponent},
    {path: 'seguimiento', component: SeguimientoComponent},
    {path: 'orden_dia', component: OrdenDiaComponent},
    {path: '**', component: LoginComponent}
];

//Exportar el modulo del router

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);