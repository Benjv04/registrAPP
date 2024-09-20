export class Usuario {
    username: string;
    password: string;
    name: string;
    lastname: string;
    rol: 'profesor' | 'alumno'; 
  
    constructor(username: string, password: string, rol: 'profesor' | 'alumno', name: string = '', lastname: string = '') {
      this.username = username;
      this.password = password;
      this.rol = rol;
      this.name = name;
      this.lastname = lastname;
    }
}
