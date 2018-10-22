import { Injectable } from '@angular/core';
import { Hero } from './classes/hero';
import { Observable, of } from 'rxjs';
// Mock Heros Data
import { HEROES } from './mock-heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor() { }

    getHeroes(): Hero[] {
        return HEROES;
    }
}
