import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from "mapbox-gl"

@Component({
  selector: 'app-zoom-rage-page',
  templateUrl: './zoom-rage-page.component.html',
  styleUrl: './zoom-rage-page.component.css'
})
export class ZoomRagePageComponent implements AfterViewInit, OnDestroy {


  @ViewChild("map") public divMap?: ElementRef<HTMLDivElement>;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40)

  ngAfterViewInit(): void {
    if (!this.divMap) throw "El elemento HTML no fue encontrado"

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();

  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw "Mapa no inicializado"

    this.map.on("zoom", (event) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on("zoomend", (event) => {
      if (this.map!.getZoom() < 18) return;

      this.map!.zoomTo(18);
    });

    this.map.on("move", () => {
      this.currentLngLat = this.map!.getCenter();
    })

  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}
