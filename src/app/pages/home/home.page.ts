import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  texto: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {}

  generarQR() {
    this.texto ='Bienvenido a RegistrAPP';
    console.log('QR generado:', this.texto);
  }

  cerrarSesion() {
    this.router.navigate(['/login']); 
  }
}
