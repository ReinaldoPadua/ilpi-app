import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VitalSigns } from 'src/app/domain/models/vital-signs';
import { IRegisterVitalSignsService } from 'src/app/domain/protocols/register-vital-signs';

/*
  To-do:
    - [X] Receber ID do institucionalizado escolhido na tela anterior e armazenar na variável "institutionalizedId"
    - [ ] Campos do formulário devem espelhar/interagir com objeto "vitalSigns" da VitalSignsRegistrationPage
    - [ ] Função "register()" deve usar os dados do objeto "vitalSigns" (valores do formulário dos sinais vitais)
    - [ ] Criar feedback/alert/diálogo para informar que algum valor está inválido (somente números)
    - [ ] Criar feedback/alert/diálogo de carregamento, enquanto envia os dados registrados
    - [ ] Ao registrar corretamente, voltar para a tela anterior ("/home")
*/

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

  constructor(
    private readonly registerService: IRegisterVitalSignsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.institutionalizedId = this.activatedRoute.snapshot.paramMap.get('id');
    const user = sessionStorage.getItem('ilpiAppLoggedUser');
    if (!user || user === '' || user === null) {
      this.router.navigate(['/login']);
    }
  }

  register() {
    this.registerService.register(this.vitalSigns, this.institutionalizedId);
  }
}
