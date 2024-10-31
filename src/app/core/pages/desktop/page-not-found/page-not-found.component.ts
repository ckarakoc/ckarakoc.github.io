import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  private router: Router = inject(Router)

  goToStart() {
    void this.router.navigate(['/']);
  }

  getImage() {
    return 'assets/images/war.jpg';
  }
}
