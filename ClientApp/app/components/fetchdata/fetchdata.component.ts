import { Component, Inject,OnInit } from '@angular/core';

import { MasterService } from '../service/master.service';
@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    private headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    
    constructor(private masterService:MasterService<WeatherForecast>) {
       masterService.extra='api/SampleData/WeatherForecasts';
       this.masterService.Get().subscribe(x=> this.storeItem(x));
    }
    ngOnInit() {
      }
    storeItem(WeatherForecast:WeatherForecast[])
    {
        this.forecasts=WeatherForecast;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

