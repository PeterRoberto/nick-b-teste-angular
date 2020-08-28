import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.less']
})
export class DestinosComponent implements OnInit {
  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  destiny = [
    {title: "Trickle Crek Ranch", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest01.png", price: "RS150/Noite"},
    {title: "Dragonfly Tiny Cabin", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest02.png", price: "RS150/Noite"},
    {title: "Tiny Cabin in the mountains", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest03.png", price: "RS150/Noite"},
    {title: "The Stuga", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest04.png", price: "RS150/Noite"},
    {title: "Luxury Tiny Beach Cabin", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest05.png", price: "RS150/Noite"},
    {title: "The Summit Cabin", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest06.png", price: "RS150/Noite"},
    {title: "Kindred Spirits Cabin", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest07.png", price: "RS150/Noite"},
    {title: "The Hermitage Cabin", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest08.png", price: "RS150/Noite"},
    {title: "Red Lifeguard Stand", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest09.png", price: "RS150/Noite"},
    {title: "The Tree House", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest10.png", price: "RS150/Noite"},
    {title: "Barrier island elevated tent", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest11.png", price: "RS150/Noite"},
    {title: "Ninovan on the Shore", description: "Reserve experiências de acampamento únicas", img: "../../assets/img/dest12.png", price: "RS150/Noite"},
  ]
 
 
  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }

}
