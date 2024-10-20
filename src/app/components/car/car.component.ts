import { Component, Input } from '@angular/core';
import {Car} from '../../models/car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car: Car | undefined;
}
