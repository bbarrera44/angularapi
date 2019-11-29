import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Vehicle, DataVehicle } from '../models/vehicle';
import { DataGeneral, Parking } from '../models/parking';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[] = [];
  vehiclesdatag: Vehicle[] = [];
  editVehicle: Vehicle;

  constructor(private apiService: ApiService) { }


  searchvehicle(plate: string): void {

    // this.searchTerms.next(term)
    if (plate.length > 0) {
      this.vehicles = this.vehiclesdatag.filter((data: Vehicle) =>
        data.plate.includes(plate)); //|| data.phone.toString().includes(term));
    } else {
      this.vehicles = this.vehiclesdatag;
    }

  }

  ngOnInit() {

    this.getVehicle()
    this.getDatavehicle()
    // this.deleteVehicle

  }


  getDatavehicle(): void {
    this.apiService.getDatavehicles()
      .subscribe((vehicles: DataVehicle) => {
        this.vehicles = vehicles.data
      });
  }




  getVehicle(): void {
    this.apiService.getDatavehicles()
      .subscribe((vehicles: DataVehicle) => {
        this.vehiclesdatag = vehicles.data;
        this.vehicles = this.vehiclesdatag
      });
  }

  deleteVehicle(plate: any): void {
    //this.vehicles = this.vehicles.filter(p => p !== plate);
    this.apiService.deleteDatavehicle(plate)
      .subscribe((params: DataVehicle) => {
        this.vehicles == params.data == plate
        if (plate = null) {
          console.error('vehiculo borrado');

        }
      });
  }

  postDatavehicle(plate: any): void {
    // const newVehicle: Vehicle = { plate } as Vehicle; 
    this.apiService.createDatavehicle(plate)
      .subscribe((params: DataVehicle) => {
        this.vehicles == params.data == plate
        console.log(this.vehicles, plate);
      });
  }

  edit(vehicle: Vehicle) {
    this.editVehicle = vehicle;
    console.log(JSON.stringify(vehicle))
  } 

 /* editDatavehicle(plate: any): void {
    this.apiService.editDatavehicle(plate)
      .subscribe((paramsplate: DataVehicle) => {
        this.vehicles = paramsplate.data = plate
        console.log(plate);

      });
  }*/

 update(id) {
    if (this.editVehicle) {
      this.apiService.editDatavehicle(id, this.editVehicle)
        .subscribe(vehicle => { 
      /*    const ix = vehicle ? this.vehicles.findIndex(h => h.id === vehicle.id) : -1
        if (ix > -1) (
           this.vehicles[ix] = vehicle
         )*/
        console.log(vehicle);

     });
     // this.editVehicle = undefined;
      console.log(this.editVehicle);
     }
 }
  
}




