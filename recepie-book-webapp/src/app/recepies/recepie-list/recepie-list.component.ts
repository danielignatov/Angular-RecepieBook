import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.scss']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie('Pizza', 'This is test recepie', 'http://danielignatov.tk/img/recepiebook/pizza.jpg'),
    new Recepie('Cake', 'This is test recepie', 'http://danielignatov.tk/img/recepiebook/cake.jpg'),
    new Recepie('Pancakes', 'This is test recepie', 'http://danielignatov.tk/img/recepiebook/pancakes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
