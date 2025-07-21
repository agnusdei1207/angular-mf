import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuthService } from '@ng-mf/data-access-user';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'ng-mf-login-entry',
  template: `
    <div class="login-app">
      <form class="login-form" (ngSubmit)="login()">
        <label>
          Username:
          <input type="text" name="username" [(ngModel)]="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
    </div>
  `,
})
export class RemoteEntry {
  private userAuthService = inject(UserAuthService);
  username = '';
  password = '';
  isLoggedIn$ = this.userAuthService.isUserLoggedIn$;

  login() {
    this.userAuthService.checkCredentials(this.username, this.password);
  }
}
