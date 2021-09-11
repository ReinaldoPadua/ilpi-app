import { Component, OnInit } from '@angular/core';
import { IGetInstitutionalizedService } from 'src/app/domain/protocols/get-institutionalized';
import { Institutionalized } from '../../../domain/models/institutionalized';

/*
  TODO:
    - [ ] Criar feedback/alert/diálogo de carregamento, enquanto busca os institucionalizados
    - [ ] Criar um layout para esta tela: Apresentar lista com todos os institucionalizados retornados em "this.getInstitutionalizedService.get()"
    - [ ] Cada institucionalizado (da lista de institucionalizados) deverá ter um botão para "interagir" ("vou coletar os sinais vitais deste aqui")
      - Ao clicar neste botão, chamar a função do TODO abaixo
    - [ ] Criar função para redirecionar para "/vitalSigns", enviando o ID do institucionalizado escolhido
*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  institutionalized: Institutionalized[] = [];

  constructor(
    private getInstitutionalizedService: IGetInstitutionalizedService
  ) {}

  ngOnInit() {
    this.getInstitutionalizedService.get().then((data) => {
      this.institutionalized = data;
    });
  }
}
