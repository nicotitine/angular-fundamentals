import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EventsListComponent, EventThumbnailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
