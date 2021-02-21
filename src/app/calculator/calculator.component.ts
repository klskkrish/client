import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CalculatedProductDto } from '../calculated-product-dto';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private router : Router,private dataService: DataService) { }

  ngOnInit(): void {
    this.getPriceList();
  }

  products:any
  calculatedProductDto = new CalculatedProductDto()
  aa:any

  getPriceList(){
    this.dataService.sendGetRequest('get-price-list').subscribe((responseBody) => {
      this.products = responseBody;
    }
  )};

  calulateTotal(){
    console.log(this.products);
    this.dataService.sendPostRequest('calculate', this.products).subscribe((resopnse: CalculatedProductDto) => {
      this.calculatedProductDto = resopnse;
    })
};

  goToPriceList(){
    this.router.navigate(['/pricelist']);

  }
}
