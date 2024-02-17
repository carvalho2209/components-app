import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './institutional/about/about/about.component';
import { ContactComponent } from './institutional/contact/contact/contact.component';
import { RegisterComponent } from './demo/reactiveforms/register/register.component';
import { NavigationModule } from './navigation/navigation.module';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';
import { MoviesComponent } from './demo/pipes/movies/movies.component';
import { FileSizePipe } from './demo/pipes/movies/filesize.pipe';
import { ImageFormaterPipe } from './demo/pipes/movies/image.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    MoviesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NavigationModule,
  ],
  providers: [
    provideClientHydration(),
    AuthGuard,
    RegisterGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
