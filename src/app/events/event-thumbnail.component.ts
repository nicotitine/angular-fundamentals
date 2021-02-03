import { Component, Input } from "@angular/core";
@Component({
  selector: "event-thumbnail",
  template: `
    <div>
      <div>Name: {{ event.name }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        &nbsp;
        <span>{{ event.location.city }}</span>
        <span>{{ event.location.country }}</span>
      </div>
    </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;

  logFoo() {
    console.log("foo");
  }
}
