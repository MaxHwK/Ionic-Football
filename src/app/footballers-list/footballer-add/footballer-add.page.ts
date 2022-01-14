import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Footballer } from 'src/app/models/footballer.model';
import { FootballerService } from 'src/app/services/footballer/footballer.service';

@Component({
  selector: 'app-footballer-add',
  templateUrl: './footballer-add.page.html',
  styleUrls: ['./footballer-add.page.scss'],
})
export class FootballerAddPage implements OnInit {

  public footballer!: Footballer;

  constructor(
    private Footballer: FootballerService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.footballer = new Footballer();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Footballer ajouté avec succès !',
      duration: 2000
    });

    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/footballers']);
      }, 2000);
    });
  }

  async presentToastEmpty() {
    const toast = this.toastCtrl.create({
      message: "Veuillez remplir tous les champs avant d'ajouter !",
      duration: 2000
    });
    (await toast).present();
  }

  add() {
    if (this.footballer.photo !== "" && this.footballer.firstname !== "" && this.footballer.lastname !== "" && 
    this.footballer.post !== "" && this.footballer.nationality !== "" && this.footballer.club !== "" && 
    this.footballer.goals !== null && this.footballer.trophies !== null) {
      this.Footballer.saveNewFootballers(this.footballer).subscribe(() => {
        this.footballer = new Footballer();
        this.presentToast();
      })
    } else {
      this.presentToastEmpty();
    }
  }

}
