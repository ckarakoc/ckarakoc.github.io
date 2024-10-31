import { Component, OnInit } from '@angular/core';
import { NgIf, NgStyle } from "@angular/common";
import { RouterLink } from "@angular/router";

import { ProgressBarModule } from "primeng/progressbar";
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";

import { LoginAvatarComponent } from "../login-avatar/login-avatar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ProgressBarModule,
    AvatarModule,
    AvatarGroupModule,
    LoginAvatarComponent,
    NgIf,
    RouterLink,
    ToastModule,
    NgStyle,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loading_done = false;
  avatars = [
    {
      name: 'Celal',
      imageUrl: 'assets/images/macos/login-profile.jpg',
      shown: true,
    },
    {
      name: 'Oğuzcan',
      imageUrl: 'assets/images/macos/login-profile2.jpg',
      shown: true,
    },
    {
      name: 'Guest',
      imageUrl: '',
      shown: true,
    }
  ]

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    setTimeout(() => {
        this.loading_done = true;
      }, 5000
    );
  }

  moveToCenter($event: boolean, name: string) {
    // $event: true iff avatar should be moved, i.e. should be in the center
    //         false otherwise
    for (let idx in this.avatars) {
      if ($event) {
        this.avatars[idx].shown = this.avatars[idx].name === name;
      } else {
        this.avatars[idx].shown = true;
      }
    }
  }

  showToastMsg() {
    this.messageService.add({ severity: 'error', summary: 'Wrong Password', detail: 'Message Content', key: 'tc' });
  }

  getImage() {
    return 'assets/images/macos/palmtree.jpg';
  }
}
