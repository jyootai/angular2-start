/**
 * Created by jyootai on 16/11/3.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { NgModule } from '@angular/core'
import { AppComponent } from '../components/app/app.component'
import { PersonFormComponent } from '../components/personForm/person-form.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent, PersonFormComponent ],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);