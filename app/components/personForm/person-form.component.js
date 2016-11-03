/**
 * Created by jyootai on 16/11/3.
 */

import { Component } from '@angular/core'
import { Person }    from '../../services/person'

@Component({
    selector: 'person-form',
    templateUrl: 'app/components/personForm/person-form.component.html'
})
export class PersonFormComponent {
    model = new Person('Caiyu', '100')
    sexList = ['男', '女']
    submitted = false;
    active = true;

    onSubmit() { this.submitted = true; }
    newPerson() {
        this.model = new Person('', '')
        this.active = false;
        setTimeout(() => this.active = true, 0)
    }
}