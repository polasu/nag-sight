import { Customer } from './Customer';
//with interface if we dont set the property in the implementation it gives the worning
//where as if we use the class it wont gives the warning as above does

export interface Order{
    id:number;
    customer: Customer;
    total:number;
    placed:Date;
    fulfilled: Date;
    
}