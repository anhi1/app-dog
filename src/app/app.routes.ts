import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: CardComponent },
    { path: 'contacto', component: ContactoComponent}
];
