import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

// Pages
import { HomePage } from './pages/home-page/home.page';

// Services
import { LoadingScreenService } from './services/loading-screen-service/loading-screen.service';
import { RouterService } from './services/router-service/router.service';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    NavComponent,
    LoadingScreenComponent,
    // Pages
    HomePage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '**', component: HomePage }
    ], { useHash: true })
  ],
  providers: [
    LoadingScreenService,
    RouterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
