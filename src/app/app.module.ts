import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent} from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EmployeeComponent } from './employee/employee.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HighlighttextDirective } from './Directives/Highlighttext.directive';
import { RendererhighlightDirective } from './Directives/rendererhighlight.directive';
import { AlternateIfDirective } from './Directives/alternateIf.directive';




@NgModule({
  declarations: [
    AppComponent,ServerComponent, ServersComponent, EmployeeComponent, UsersComponent, UserComponent, HighlighttextDirective, RendererhighlightDirective, AlternateIfDirective
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
