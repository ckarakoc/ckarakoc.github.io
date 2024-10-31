import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DialogModule } from "primeng/dialog";
import { SharedModule } from "primeng/api";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-about-dialog',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    DialogModule,
    SharedModule,
    AboutComponent
  ],
  templateUrl: './about-dialog.component.html',
  styleUrl: './about-dialog.component.scss'
})
export class AboutDialogComponent {
  isVisible: boolean = false;

  updateVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
