import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {WhyChooseComponent} from './why-choose/why-choose.component';
import {BlogComponent} from "./blog/blog.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WhyChooseComponent,
        BlogComponent
    ],
    imports: [
        // BrowserModule.withServerTransition({appId: 'my-app'}),
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: '', loadChildren: './content/content.module#ContentModule' },
            { path: 'about', component: AboutComponent },
            { path: 'why-choose', component: WhyChooseComponent },
            { path: 'blog', component: BlogComponent }
        ], { useHash: true }),
        // TransferHttpCacheModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
