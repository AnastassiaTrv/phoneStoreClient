import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-total-price-calculator',
  templateUrl: './total-price-calculator.component.html',
  styleUrls: ['./total-price-calculator.component.css']
})
export class TotalPriceCalculatorComponent implements OnInit {

  constructor() { }

  // used to render amount in drop down
  selectedAmount: number;
  totalPrice: number;

  @Input() oneTimePrice: number;
  @Input() recurrentPrice: number;
  @Input() recurrentCount: number;
  @Input() currency: string;

  ngOnInit() {
    // default amount
    this.selectedAmount = 1;

    // calculate total price based on default selected amount
    this.calculateTotalPrice();
  }


  /**
   * Calculate total price of product depending on amount and price info
   */
  calculateTotalPrice() {
    const oneProductTotalPrice = this.oneTimePrice + this.recurrentCount * this.recurrentPrice;
    this.totalPrice = this.selectedAmount * oneProductTotalPrice;
  }

}
