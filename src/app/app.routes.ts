import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import{AdopcionComponent} from './components/adopcion/adopcion.component';

export const routes: Routes = [
    { path: '', component: CardComponent },
    { path: 'adopcion', component: AdopcionComponent}
];
