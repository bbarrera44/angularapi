
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Parking, DataGeneral } from '../models/parking';
//import { Observable, Subject } from 'rxjs';
//import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
//import { stringify } from 'querystring';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

 /// private searchTerms = new Subject<string>();
  //datageneral: DataGeneral[];

  public parkings: Parking[] = [];
  public parkings_espejo: Parking[] = [];
  constructor(private apiService: ApiService) { }

  /*search parking*/
  search(term: string): void {
    // this.searchTerms.next(term)
    if (term.length > 0) {
      this.parkings = this.parkings_espejo.filter((data:Parking) => data.name_parking.includes(term) || data.phone.toString().includes(term));
    }else {
      this.parkings = this.parkings_espejo;
    }
    
    // this.apiService.searchParking(term).subscribe((data: any) => {
    //   // debugger
    //   this.parkings = [];
    //   this.parkings.push(data.data)
    //   console.log(this.parkings);
      
    // })
  }

  ngOnInit(): void {

    this.getData();
  }


  getData(): void {
    this.apiService.getObtenerdatos()
      .subscribe((parkings: DataGeneral) => {

        this.parkings_espejo = parkings.data;
        this.parkings = this.parkings_espejo
        //console.log(this.parkings);
      });

  }

}