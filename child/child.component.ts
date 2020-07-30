import { Component,Input } from '@angular/core';

@Component({
    selector: 'child-cmp',
    templateUrl: './child.component.html'
})
export class childComponent{

    @Input('na') nam;

}