/**
 * Created by jyootai on 16/11/3.
 */

import { Component } from '@angular/core'
import { personService }    from '../../services/personService'

@Component({
    selector: 'person-form',
    providers: [personService],
    templateUrl: 'app/components/personForm/person-form.component.html'
})
export class PersonFormComponent {
    constructor(person: personService) {
        this.sexList = person.getPerson().sexList
        this.model = person.getPerson().model
        this.submitted = false;
        this.active = true;
    }

    onSubmit() { this.submitted = true; }
    newPerson() {
        this.model = {username: '', age: '', sex: ''}
        this.active = false;
        setTimeout(() => this.active = true, 0)
    }
}