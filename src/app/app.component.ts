import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from "./Feedback/Feedback.component";

@Component({
  selector: "todo-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {


  constructor(public _dialog: MatDialog) {}

  openFeedbackDialog() {
    this._dialog.open(FeedbackComponent, {
        width: '600px',
    });
}
}
