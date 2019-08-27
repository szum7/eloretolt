import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faPlay, faPause, faStop, faCaretRight, faCaretLeft, faSun, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { AudioPlayerComponent } from "./components/audio-player/audio-player.component";

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
    TrackListComponent,
    AudioPlayerComponent,
    // Pages
    HomePage
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SliderModule,
    FormsModule,
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
export class AppModule { 
  constructor() {
    library.add(faInfoCircle);
    library.add(faPlay);
    library.add(faPause);
    library.add(faStop);
  }
}
