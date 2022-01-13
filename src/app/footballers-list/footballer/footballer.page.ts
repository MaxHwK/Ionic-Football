import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FootballerService } from 'src/app/services/footballer/footballer.service';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.page.html',
  styleUrls: ['./footballer.page.scss'],
})

export class FootballerPage implements OnInit {

  modif!: boolean;
  delete!: boolean;
  footballer: any = null;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Footballer: FootballerService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Footballer.get(id).subscribe((value: any) => {
      this.footballer = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Modification',
        subHeader: 'Voulez-vous vraiment modifier les informations concernant ce joueur ?',
        buttons: [
          {
            text: 'Non',
            role: 'Cancel'
          }, {
            text: 'Oui',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });
  
      await alert.present();
    } else {
    this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications ont été enregistrées avec succès !',
      duration: 2000
    });
    (await toast).present();
  }

  async presentToastEmpty() {
    const toast = this.toastCtrl.create({
      message: 'Veuillez re-remplir tous les champs !',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    if (this.footballer.photo !== "" && this.footballer.firstname !== "" && this.footballer.lastname !== "" && 
    this.footballer.post !== "" && this.footballer.nationality !== "" && this.footballer.club !== "" ) {
      this.Footballer.update(this.footballer).subscribe(() => {
        this.presentToast();
        this.modif = false;
      });
    } else {
      this.presentToastEmpty();
    }
  }

  async setDelete() {
    if(!this.delete) {
      const alert = await this.alertCtrl.create({
        header: 'Suppression',
        subHeader: 'Voulez-vous vraiment supprimer ce Footballer ?',
        buttons: [
          {
            text: 'Non',
            role: 'Cancel'
          }, {
            text: 'Oui',
            handler: () => { this.delete = !this.delete},
          }
        ]
      });
  
      await alert.present();
    } else {
    this.delete = !this.delete;
    }
  }

  async presentToastSuppr() {
    const toast = this.toastCtrl.create({
      message: 'Ce Footballer a été supprimé avec succès !',
      duration: 2000
    });
    (await toast).present();
  }

  onDelete(id: any) {
    this.Footballer.delete(id);
    this.presentToastSuppr();
    this.router.navigate(['/tab/footballers']);
  }

}
