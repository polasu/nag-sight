import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/orders';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }
  orders: Order[] =[ 
    {id:1, customer:{id:1, name:'sai', email:'t@a.com', state:'AB'}, total:230, placed: new Date(2020,12,1),fulfilled: new Date(2020,12,3)},
    {id:2, customer:{id:1, name:'sai', email:'t@a.com', state:'AB'}, total:230, placed: new Date(2020,12,1),fulfilled: new Date(2020,12,3)},
    {id:3, customer:{id:1, name:'sai', email:'t@a.com', state:'AB'}, total:230, placed: new Date(2020,12,1),fulfilled: new Date(2020,12,3)},
    {id:4, customer:{id:1, name:'sai', email:'t@a.com', state:'AB'}, total:230, placed: new Date(2020,12,1),fulfilled: new Date(2020,12,3)},
    {id:5, customer:{id:1, name:'sai', email:'t@a.com', state:'AB'}, total:230, placed: new Date(2020,12,1),fulfilled: new Date(2020,12,3)}    
  ];

  ngOnInit(): void {
  }

}
