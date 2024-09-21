import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: Usuario[] = [
    new Usuario('admin', '12345', 'profesor', 'Admin', 'User'),
    new Usuario('profesor1', '12345', 'profesor', 'Ivan', 'Fernandez'),
    new Usuario('alumno1', '12345', 'alumno', 'Diego', 'Fuentes', false),
    new Usuario('alumno2', '12345', 'alumno', 'Benjamin', 'Gonzalez', false)
  ];

  constructor() {}

  validateLogin(username: string, password: string): Usuario | null {
    console.log('Ejecutando validacion');
    const found = this.users.find(user => user.username === username);
    if (found !== undefined && found.password === password) {
      console.log('Usuario existente y contraseña correcta');
      return found;
    }
    console.log('Usuario no existe o contraseña incorrecta');
    return null;
  }

  //funcion para obtener solo los alumnos
  getAlumnos(): Usuario[] {
    return this.users.filter(user => user.rol === 'alumno');
  }

  actualizarPresencia(username: string, presente: boolean) {
    const alumno = this.users.find(user => user.username === username && user.rol === 'alumno');
    if (alumno) {
      alumno.presente = presente;
    }
  }
}
