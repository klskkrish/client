import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricelistComponent } from './pricelist/pricelist.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [  
  {path:'pricelist', component:PricelistComponent},
  {path:'calculator', component:CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
