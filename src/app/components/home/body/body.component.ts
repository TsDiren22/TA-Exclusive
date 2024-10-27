import { Component } from '@angular/core';
import {CarComponent} from '../../car/car.component';
import {Car} from '../../../models/car';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CarComponent,
    CommonModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  cars: Car[] = [
    { makeName: "BMW", modelName: "3 Series", trimDescription: "M340i xDrive", trimYear: 2020, price: 25000, mileage: 48975, engineFuelType: "Diesel", engineTransmission: "Automatisch", image: "/bmw.webp" },
    { makeName: "Audi", modelName: "Q8", trimDescription: "Premium 4dr SUV AWD w/55 TFSI (3.0L 6cyl Turbo gas/electric mild hybrid 8A)", trimYear: 2020, price: 35000, mileage: 75183, engineFuelType: "Hybride", engineTransmission: "Automatisch", image: "/audi.webp" },
    { makeName: "Bentley", modelName: "Bentayga", trimDescription: "Hybrid 4dr SUV AWD (3.0L 6cyl Turbo gas/electric plug-in hybrid 8A)", trimYear: 2020, price: 60000, mileage: 42864, engineFuelType: "Hybride", engineTransmission: "Automatisch", image: "/bentley.jpg" },
    { makeName: "Ford", modelName: "Mustang", trimDescription: "GT 2dr Coupe (5.0L 8cyl 6M)", trimYear: 2020, price: 40000, mileage: 20186, engineFuelType: "Benzine", engineTransmission: "Handmatig", image: "/ford.jpg" }
  ];
}
