import {Component} from '@angular/core';

import {Busyo} from './busyo'

@Component({
    moduleId: module.id,
    selector: 'busyo-form',
    templateUrl: './busyo-form.component.html'
})
export class BusyoFormComponent {
    powers = [ 'A++','A+','A','B','C','D' ];

    model = new Busyo( 19,'竹中半兵衛',this.powers[0],'天才軍師');

    submitted = false;

    onSubmit() { this.submitted=true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model);}
}