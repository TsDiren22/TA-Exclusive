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
    { makeName: "BMW", modelName: "3 Series", trimDescription: "M340i xDrive", trimYear: 2020, price: 25000 },
    { makeName: "Audi", modelName: "Q8", trimDescription: "Premium 4dr SUV AWD w/55 TFSI (3.0L 6cyl Turbo gas/electric mild hybrid 8A)", trimYear: 2020, price: 35000 },
    { makeName: "Bentley", modelName: "Bentayga", trimDescription: "Hybrid 4dr SUV AWD (3.0L 6cyl Turbo gas/electric plug-in hybrid 8A)", trimYear: 2020, price: 60000 },
    { makeName: "Ford", modelName: "Mustang", trimDescription: "GT 2dr Coupe (5.0L 8cyl 6M)", trimYear: 2020, price: 40000 }
  ];
}
