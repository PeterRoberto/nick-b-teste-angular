import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-eventos',
  templateUrl: './box-eventos.component.html',
  styleUrls: ['./box-eventos.component.less']
})
export class BoxEventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events = [
    {title: "Acampamento", description: "Descubra um novo que seja certo para você.", img: "../../assets/img/bonfire.png"},
    {title: "Passeios e ingressos", description: "Descubra um novo que seja certo para você.", img: "../../assets/img/tickets.png"},
    {title: "Permissões", description: "Descubra um novo que seja certo para você.", img: "../../assets/img/filledoutline.png"},
    {title: "Atividades recreativas", description: "Descubra um novo que seja certo para você.", img: "../../assets/img/fishing.png"},
  ]

}
