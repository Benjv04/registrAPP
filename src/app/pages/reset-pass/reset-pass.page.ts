import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage {
  showPasswordFields: boolean = false;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  togglePasswordFields() {
    this.showPasswordFields = true;
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}