import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const routeAnimate=trigger('routeAnimate',[
    state('enter',style({})),
    state('leave',style({})),
    transition('enter=>leave',animate(500,keyframes([
        style({transform:'translate(0,0)'}),
        style({transform:'translate(-100%,0)'}),
    ]))),
    transition('leave=>enter',animate(500,keyframes([
        style({transform:'translate(-100%,0)'}),
        style({transform:'translate(0,0)'}),
    ]))),
]);