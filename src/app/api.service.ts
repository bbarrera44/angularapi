import { Injectable } from '@angular/core';
import { DataGeneral } from './models/parking';
import { DataVehicle, Parking, Vehicle } from './models/vehicle';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  get url() { return "https://api-railsangular.herokuapp.com" }
  



  constructor(private httpClient: HttpClient) { }
  /* routes parking api */
  getObtenerdatos(): Observable<DataGeneral> {
    return this.httpClient.get<DataGeneral>(this.url + "/api/parkings").pipe(
      map((data: any) => data)
    );
  }

  searchParking(term: string): Observable<DataGeneral> {
    return this.httpClient.get<DataGeneral>(`${this.url}/api/parkings/show_parking/${term.trim()}`).pipe(
      map((data: any) => data)
    );
  }

  /* vehicles route api */

  getDatavehicles(): Observable<DataVehicle> {
    return this.httpClient.get<DataVehicle>(this.url + "/api/vehicles").pipe(
      map((data: any) => data)
    );

  }


  getSearchvehicles(plate: string): Observable<DataGeneral> {
    return this.httpClient.get<DataGeneral>(`${this.url}/api/vehicles/show_vehicle/${plate.trim()}`).pipe(
      map((data: any) => data)
    );
    //private log(menssge: string) {

  }

  deleteDatavehicle(plate: string): Observable<{}> {
    const url = (`${this.url}/api/vehicles/destroy_vehicle/${plate.trim()}`);
    return this.httpClient.delete(url)
      .pipe(
        map((data: any) => data)
      );
  }

   
  createDatavehicle(plate: Vehicle): Observable<DataVehicle>{
    return this.httpClient.post<DataVehicle>(`${this.url}/api/vehicles/create_vehicle/${plate}`, plate)
  /*  .pipe(
      map((plate: any)  => plate)
    );*/
  }
  
  editDatavehicle(id: number, data): Observable<any>{
    return this.httpClient.put<any[]>(this.url + `/api/vehicles/update_vehicle/${id}`, data  ) 
  }
}
