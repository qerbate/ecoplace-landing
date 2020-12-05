import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { WhoComponent } from './who/who.component';
import { FeatureComponent } from './feature/feature.component';
import { ContactComponent } from './contact/contact.component';

import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { WhoPageComponent } from './who-page/who-page.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';



import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  

  
  { path: 'Header', component: HeaderComponent },

  
 
  { path: 'Slider', component: SliderComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Who', component: WhoComponent },
  { path: 'Feature', component: FeatureComponent },
  {path:  'contact', component: ContactComponent,canActivate:[AuthGuard],
   data: {title: `Lista de Contato`}
  },
 
 

 
 
  


  
  {path:  'Info', component: InfoComponent},
  { path: 'Footer', component: FooterComponent },
  { path: 'WhoPage', component: WhoPageComponent },
  { path:'FeaturePage', component:FeaturePageComponent},
  { path:'ContactPage', component:ContactPageComponent},
  { path: '', redirectTo: '/Header', pathMatch: 'full' },
  { path: '**', component:PaginaNaoEncontradaComponent},
  
  
  ];   

  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      useHash: true
    }),
    QuicklinkModule,
  ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }