import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service'; // Asegúrate de que la ruta sea correcta
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(
    private loginService: LoginService,
    private toastController: ToastController,
    private router: Router
  ) {}

  togglePasswordFields() {
    console.log('Verificando usuario:', this.email);
    if (this.loginService.userExists(this.email)) {
      this.showPasswordFields = true;
      this.presentToast('Usuario encontrado. Por favor, ingrese su nueva contraseña.','success');
    } else {
      this.presentToast('Usuario no encontrado. Verifique el nombre de usuario.','danger');
    }
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.presentToast('Las contraseñas no coinciden','danger');
      return;
    }

    if (this.loginService.changePassword(this.email, this.password)) {
      this.presentToast('Contraseña cambiada con éxito','success');
      this.router.navigate(['/login']);
    } else {
      this.presentToast('Error al cambiar la contraseña','danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color 
    });
    toast.present();
  }
/*
  goToLogin (){
    this.router.navigate(['/login']);
  } */
}