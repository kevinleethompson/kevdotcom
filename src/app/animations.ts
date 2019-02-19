import {
    animation, trigger, animateChild, group,
    transition, animate, state, style, query
} from '@angular/animations';

export const fadeSlideIn = animation([
    style({ transform: 'translateX({{ xDistance }}) translateY({{ yDistance }})', opacity: 0 }),
    animate('{{ time }}', style({
            transform: 'translateX(0) translateY(0)',
            opacity: 1,
        }),
    )
]);

export const fadeSlideOut = animation([
    animate('{{ time }}', style({
            transform: 'translateX({{ xDistance }}) translateY({{ yDistance }})',
            opacity: 0,
        }),
    )
]);
