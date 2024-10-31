import { Component, HostBinding, OnInit } from '@angular/core';
import { CardModule } from "primeng/card";
import { NgIf, NgStyle } from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgIf,
    CardModule,
    NgStyle
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  showButton: boolean = false;
  @HostBinding("style.--card-color") color: string = '';

  ngOnInit(): void {
    let colors = ['#f9b234', '#3ecd5e', '#e44002', '#952aff', '#cd3e94', '#4c49ea'];
    let idx = Math.floor(Math.random() * colors.length);
    this.color = colors[0];
    colors.splice(idx, 1);
    let gradient = colors;
  }

  getImage() {
    return 'assets/images/big_brother.jpg';
  }
}
