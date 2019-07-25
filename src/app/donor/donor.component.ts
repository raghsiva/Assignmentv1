import { Component, OnInit } from '@angular/core';
import {DonorService} from './donor.service';
import {Donor} from './Donor';
@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  characters: Donor[];
  constructor(private dService: DonorService) { }

  ngOnInit() {
    this.dService.getCharacters().subscribe(
      (data: Donor[]) => {
        this.characters = data;
      }
    )
  }
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };
}
