import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
  selector: "event-details",
  templateUrl: "event-details.component.html",
  styles: [
    `
      .container {
        padding-right: 20px;
        padding-left: 20px;
      }

      .event-image {
        height: 200px;
      }
    `
  ]
})
export class EventDetailsComponent {
  event: any;
  constructor(private eventService: EventService) {}
  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
