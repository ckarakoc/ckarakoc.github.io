import { Component } from '@angular/core';
import { MenubarComponent } from "../../../components/menubar/menubar.component";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { NgStyle } from "@angular/common";
import { AboutDialogComponent } from "../about-dialog/about-dialog.component";

@Component({
  selector: 'app-macos',
  standalone: true,
  imports: [
    MenubarComponent,
    NavbarComponent,
    NgStyle,
    AboutDialogComponent,
  ],
  templateUrl: './macos.component.html',
  styleUrl: './macos.component.scss'
})
export class MacosComponent {
  private dektopImgBaseUrl = 'assets/images/macos/';
  private desktopImages = ['cat1.jpg', 'cat2.jpg', 'palmtree.jpg', 'mac_default.jpg', 'waves.jpg', 'circle.gif'];
  private currentImageIndex = this.desktopImages.length - 1;

  getDesktopImage() {
    return this.dektopImgBaseUrl + this.desktopImages[this.currentImageIndex];
  }

  getImageBelow() {
    return this.dektopImgBaseUrl + this.desktopImages[2];
  }
}
