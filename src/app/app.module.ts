import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/nav-bar.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
