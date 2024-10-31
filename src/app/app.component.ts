import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { ButtonModule } from "primeng/button";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { MenubarComponent } from "./core/components/menubar/menubar.component";
import { NgStyle } from "@angular/common";
import { animate, animateChild, animation, group, query, state, style, transition, trigger, useAnimation } from "@angular/animations";

const rotatedState = trigger('rotatedState', [
  state('default', style({
    transform: 'rotate(0)'
  })),
  state('rotated', style({
    transform: 'rotate(-180deg)'
  })),
  transition('rotated => default',
    animate('400ms ease-out')
  ),
  transition('default => rotated',
    animate('400ms ease-in')
  )
])

const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);

const openClose = trigger('openClose', [
  transition('open => closed', [
    useAnimation(transitionAnimation, {
      params: {
        height: 0,
        opacity: 1,
        backgroundColor: 'red',
        time: '1s',
      },
    }),
  ]),
]);

const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true },
      ),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ])


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    NavbarComponent,
    MenubarComponent,
    NgStyle,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation,
    openClose,
    rotatedState
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
