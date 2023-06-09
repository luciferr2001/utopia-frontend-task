import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api/api.service';
import { Subscription } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { SidebarComponent } from '../common/sidebar/sidebar.component';

import * as L from 'leaflet';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'panel-table',
  templateUrl: './panel-table.component.html',
  styleUrls: ['./panel-table.component.scss']
})
export class PanelTableComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private toast: HotToastService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(SidebarComponent) SidebarComponent: SidebarComponent;

  // Declaring Variables
  displayedColumns: string[] = ['panel_name', 'mac_id', 'Lat', 'Lng', 'location'];
  dataSource: MatTableDataSource<any>;
  ApiSubscription: Subscription;
  panelData: Array<any>;

  // Ng On Init function
  ngOnInit():void {
    this.getDataFromAPI();
  }

  // Getting Data from api function
  getDataFromAPI() {
    // Subscribing to api service
    this.ApiSubscription = this.apiService.getData().pipe(
      this.toast.observe(
        {
          loading: 'Loading...',
          success: "Data Fetched Successfully",
          error: 'Oops..',
        }
      ),
    ).subscribe({
      next: (data: any) => {
        this.panelData = data.result;
        // Passing data to tablesource
        this.dataSource = new MatTableDataSource(this.panelData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  // Filter function for table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //-------Sidebar Details------------
  showPanelDetail=false;
  showPanelMapDetail=false;

  // Getting Particular data according to id
  particularData: any;


  // Function for details
  openSideBarForPanelDetails(id: Number) {
    this.SidebarComponent.toggle();
    this.showPanelDetail=true;
    this.showPanelMapDetail=false;
    this.particularData = this.panelData.find(
      (element: any) => element._id == id
    );
  }

  // Function for map
  openSideBarForMapDetails(lat:any,long:any) {
    this.SidebarComponent.toggle();
    this.showPanelMapDetail=true;
    this.showPanelDetail=false;
    this.loadMap(lat,long);
  }

  // Map Starts here
  map: any;
  private loadMap(lat:any,long:any): void {
    this.map = L.map('map').setView([lat, long], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'For Development purpose'
    }).addTo(this.map);
    let marker = L.marker([lat, long]).addTo(this.map);
    marker.bindPopup(`Latitude:${lat}<br> Longitude:${long}`).openPopup();

  }
}
