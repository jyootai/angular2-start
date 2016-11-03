/**
 * Created by jyootai on 16/11/3.
 */
import { Injectable } from '@angular/core';
import { Person } from './person-mock'

@Injectable()
export class personService {
    getPerson() { return Person;  }
}
