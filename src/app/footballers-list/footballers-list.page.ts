import { Component, OnInit } from '@angular/core';
import { FootballerService } from '../services/footballer/footballer.service';

@Component({
  selector: 'app-footballers-list',
  templateUrl: './footballers-list.page.html',
  styleUrls: ['./footballers-list.page.scss'],
})
export class FootballersListPage implements OnInit {

  footballers!: any;
  constructor(
    private Footballer: FootballerService
  ) { }

  ngOnInit() : void {
    this.Footballer.getAllFootballers().subscribe((data: any) => {
      this.footballers = data;
    })
  }

}
