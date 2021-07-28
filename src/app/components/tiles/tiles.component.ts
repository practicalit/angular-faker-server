import { Component, OnInit } from '@angular/core';

export interface TileData {
  title: string,
  imageSrc: string,
  alt: string
}


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  constructor() { }
  tiles: Array<TileData> = [
    {
      title: "one title",
      imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Photo of a Shiba Inu"
    },
    {
      title: "one title",
      imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Photo of a Shiba Inu"
    },
    {
      title: "one title",
      imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Photo of a Shiba Inu"
    },
    {
      title: "one title",
      imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Photo of a Shiba Inu"
    },
    {
      title: "one title",
      imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Photo of a Shiba Inu"
    },
    {
      title: "one title",
      imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Photo of a Shiba Inu"
    }
  ];

  ngOnInit(): void {
  }

}
