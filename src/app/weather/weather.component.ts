import { WeatherapiService } from './../weatherapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeatherData: any;
  constructor(private weatherapiService: WeatherapiService) { }
  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(): any{
    this.weatherapiService.getWeather('35', '139').subscribe((response) =>
    this.WeatherData = response);
  }
}
