import { Component, OnInit } from '@angular/core';
import { IGetInstitutionalizedService } from 'src/app/domain/protocols/get-institutionalized';
import { Institutionalized } from '../../../domain/models/institutionalized';
import { Router } from '@angular/router';

/*
  TODO:
    - [X] Criar feedback/alert/diálogo de carregamento, enquanto busca os institucionalizados
    - [X] Criar um layout para esta tela: Apresentar lista com todos os institucionalizados retornados em "this.getInstitutionalizedService.get()"
    - [X] Cada institucionalizado (da lista de institucionalizados) deverá ter um botão para "interagir" ("vou coletar os sinais vitais deste aqui")
      - Ao clicar neste botão, chamar a função do TODO abaixo
    - [X] Criar função para redirecionar para "/vitalSigns", enviando o ID do institucionalizado escolhido
*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading: boolean = true;
  institutionalized: Institutionalized[] = [];

  constructor(
    private getInstitutionalizedService: IGetInstitutionalizedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getInstitutionalizedService.get().then((data) => {
      this.institutionalized = data;
      this.isLoading = false;
    });
  }

  selectInstitutionalized(id: String) {
    this.router.navigate(['/vitalSigns/' + id])
  }
}
