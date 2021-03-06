import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from "@clr/angular";
import { HelperHttpService } from './services/helper-http.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ClarityModule,
        ROUTING,
        HttpClientModule,
    ],
    providers: [HelperHttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
