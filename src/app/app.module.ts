import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { CdkColumnDef } from '@angular/cdk/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';









import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParkingComponent } from './parking/parking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';





@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule,
    MatProgressBarModule,
    MatTableModule,
    CdkTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
    
    
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
