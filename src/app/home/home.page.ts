import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authSrv = inject(AuthService);

  espaniol: boolean = true;
  ingles: boolean = false;
  portugues: boolean = false;
  
  animales :boolean = true;
  colores :boolean = false;
  numeros :boolean = false;

  lenguaje: string = '_esp';

  sound;
  pathAudio: string = '';
  constructor(private router: Router) {
  }

  langSelected(language: number) {
    switch (language) {
      case 1:
        this.espaniol = true;
        this.portugues = false;
        this.ingles = false;
        this.lenguaje = '_esp';
        break;
      case 2:
        this.espaniol = false;
        this.portugues = false;
        this.ingles = true;
        this.lenguaje = '_ing';
        break;
      case 3:
        this.espaniol = false;
        this.portugues = true;
        this.ingles = false;
        this.lenguaje = '_por';
        break;
    }
    this.playSoundLanguage();

  }

  temaSeleccionado(tema: number) {
    switch (tema) {
      case 1:
        this.animales = true;
        this.numeros = false;
        this.colores = false;
        break;
      case 2:
        this.animales = false;
        this.numeros = true;
        this.colores = false;
        break;
      case 3:
        this.animales = false;
        this.numeros = false;
        this.colores = true;
        break;
    }
    this.playSoundThemeChange();
  }
  playSoundLanguage() {
    const path = '../../assets/sound/extra/lenguaje' + this.lenguaje + '.mp3';
    const audio = new Audio(path);
    audio.play();  
  }

  playSoundThemeChange() {
    if (this.animales) {
      const path = '../../assets/sound/extra/animales' + this.lenguaje + '.mp3';
      const audio = new Audio(path);
      audio.play();
    } else if (this.numeros) {
      const path = '../../assets/sound/extra/numeros' + this.lenguaje + '.mp3';
      const audio = new Audio(path);
      audio.play();
    } else if (this.colores) {
      const path = '../../assets/sound/extra/colores' + this.lenguaje + '.mp3';
      const audio = new Audio(path);
      audio.play();
    }
  } 

  chooseAnimal(animal: string) {
    this.playSoundTheme(animal);
  } 

  chooseColor(color: string) {
    this.playSoundTheme(color);
  } 

  chooseNumber(number: string) {
    this.playSoundTheme(number);
  } 

  playSoundTheme(typeOfSound: string) {
    if (this.animales) {
      this.pathAudio =
        '../../assets/sound/animales/' + typeOfSound + this.lenguaje + '.mp3';
      this.sound = new Audio(this.pathAudio);
      this.sound.play();
    } else if (this.numeros) {
      this.pathAudio =
        '../../assets/sound/numeros/' + typeOfSound + this.lenguaje + '.mp3';
      this.sound = new Audio(this.pathAudio);
      this.sound.play();
    } else if (this.colores) {
      this.pathAudio =
        '../../assets/sound/colores/' + typeOfSound + this.lenguaje + '.mp3';
      this.sound = new Audio(this.pathAudio);
      this.sound.play();
    }
  } 
  logout() {
    this.authSrv.signOut().then((resp) => {
      this.router.navigate(['/login']);
    })
  }

}
