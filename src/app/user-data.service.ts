
import {User} from './user-data';
//import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserFetch } from './user-fetch';


export class UserData implements InMemoryDbService {
  createDb(){
    const users: User[] = [
      { id: 1, name: 'Samsung', model: 'F12', price: '30000'  },
      { id: 2, name: 'RealMe', model: 'Z8', price: '15000'  },
      { id: 3, name: 'Opp', model: 'N8', price: '20000'  },
      { id: 4, name: 'Lenovo', model: 'M9', price : '10000' },
      { id: 5, name: 'RedMe', model: 'PZ', price: '20000'  }

    ];
    const user: UserFetch[]=[
      {
        id:1,
        name: 'Farari',
        model: 'AB'
      },
      {
       id:2,
       name: 'Lamborgini',
       model: 'CD'
     }    ,
     {
       id:3,
       name: 'Safari',
       model: 'FG'
     }    ,
     {
       id:4,
       name: 'Benz',
       model: 'IJ'
     } ,
     {
       id:5,
       name: 'Alto x',
       model: 'XZ'
     }
     ];
 
    return {users, user};
  }
}
