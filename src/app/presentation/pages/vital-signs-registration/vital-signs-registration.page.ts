import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VitalSigns } from 'src/app/domain/models/vital-signs';
import { IRegisterVitalSignsService } from 'src/app/domain/protocols/register-vital-signs';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vital-signs-registration',
  templateUrl: 'vital-signs-registration.page.html',
  styleUrls: ['vital-signs-registration.page.scss'],
})
export class VitalSignsRegistrationPage implements OnInit {
  institutionalizedId = '';

  vitalSigns: VitalSigns = {
    saturation: 0,
    bloodPressure: 0,
    heartRate: 0,
    respiratoryFrequency: 0,
    bodyTemperature: 0,
  };

  loading = false;

  homeRoute = '/home';
  loginRoute = '/login';
  altTile = 'Atenção';
  altMsgInvalid = 'Valor digitado inválido!';
  altMsgRegError = 'Erro ao salvar dados! Tente novamente mais tarde!';
  altBtnOk = 'OK';
  loadMessage = 'Aguarde...';
  altConfirmTitle = 'Confirmar os dados';
  altConfirmMsg = 'Tem certeza que os dados estão corretos?';
  validKeyCodes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  btnYes = 'Sim';
  bntNo = 'Não';

  constructor(
    private readonly registerService: IRegisterVitalSignsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.institutionalizedId = this.activatedRoute.snapshot.paramMap.get('id');
    const user = sessionStorage.getItem('ilpiAppLoggedUser');
    if (!user || user === '' || user === null) {
      this.router.navigate([this.loginRoute]);
    }
    this.loading = true;
  }

  async register() {
    const loading = await this.loadingController.create({
      message: this.loadMessage,
    });
    await loading.present();

    try {
      await this.registerService.register(this.vitalSigns, this.institutionalizedId);
      this.router.navigate([this.homeRoute]);
    } catch (error) {
      const alert = await this.alertController.create({
        header: this.altTile,
        message: this.altMsgRegError,
        buttons: [this.altBtnOk],
      });
      alert.present();
    } finally {
      loading.dismiss();
    }
  }

  back() {
    this.router.navigate([this.homeRoute]);
  }

  async showAlertRegisterConfirmation() {
    const alert = await this.alertController.create({
      header: this.altConfirmTitle,
      message: this.altConfirmMsg,
      buttons: [
        {
          text: this.bntNo,
        },
        {
          text: this.btnYes,
          handler: () => {
            this.register();
          },
        },
      ],
    });
    return alert.present();
  }

  async validationKey(keyCode) {
    if (!this.validKeyCodes.includes(keyCode)) {
      const alert = await this.alertController.create({
        header: this.altTile,
        message: this.altMsgInvalid,
        buttons: [this.altBtnOk],
      });
      return alert.present();
    }
  }
}
