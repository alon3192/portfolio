import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ViewSafunComponent } from './view-safun/view-safun.component';
import { ViewGamefillComponent } from './view-gamefill/view-gamefill.component';

const appRoutes: Routes = [
    { path: '' , component: HomeComponent},
    { path: 'Safun', component: ViewSafunComponent },
    { path: 'Gamefill', component: ViewGamefillComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}