import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
@Injectable()
export class PricelistComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getPriceList();
  }
  products:any;

  getPriceList(){
    this.dataService.sendGetRequest('get-price-list').subscribe((responseBody) => {
      this.products = responseBody;
    }
  )};

  goToCalculator(){
    this.router.navigate(['/calculator']);
  }

}
