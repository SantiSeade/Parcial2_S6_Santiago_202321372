import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolinea-list',
  templateUrl: './aerolinea-list.component.html',
  styleUrls: ['./aerolinea-list.component.css']
})
export class AerolineaListComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];

  constructor(private aerolineaService: AerolineaService) { }

  getAerolineas(): void {
    this.aerolineaService.getAerolineas().subscribe((aerolineas) => {
      this.aerolineas = aerolineas;
    });
  }

  ngOnInit() {
    this.getAerolineas();
  }

}
