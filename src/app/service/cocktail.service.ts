import { Cocktail } from './../models/cocktail';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails() {
    const cocktail: Cocktail = new Cocktail();
    const result = [];

    cocktail.name = 'bobSyrup';
    cocktail.price = 99;
    cocktail.img = 'dsfkhklhskdsd.com';

    result.push(cocktail);
    return result;
  }
}
