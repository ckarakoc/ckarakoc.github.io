import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AvatarModule } from "primeng/avatar";
import { Password, PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-login-avatar',
  standalone: true,
  imports: [
    AvatarModule,
    PasswordModule,
    ButtonModule,
    TooltipModule,
  ],
  templateUrl: './login-avatar.component.html',
  styleUrl: './login-avatar.component.scss'
})
export class LoginAvatarComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() name?: string;
  @Output() moveAvatar = new EventEmitter<boolean>();
  @Output() clearedPwdField = new EventEmitter<void>();

  shown = false;
  guest = false;

  ngOnInit() {
    if (!this.name) {
      this.name = 'Guest';
      this.guest = true;
    }
  }

  showPwdInput($event: MouseEvent) {
    if (!this.shown) {
      this.moveAvatar.emit(true);
      if (!this.guest)
        this.shown = true;
    }
  }

  hidePwdInput($event: MouseEvent) {
    if (this.shown) {
      if (!this.guest)
        this.shown = false;
      this.moveAvatar.emit(false);
    }
    $event.stopPropagation();
  }

  clearPwd(passwordInput: Password) {
    passwordInput.clear();
    this.clearedPwdField.emit();
  }
}
