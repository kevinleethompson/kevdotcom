import { Component } from '@angular/core';
import { transition, trigger, style, query, group, animate } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
    trigger('routerTransition', [
        transition('* <=> *', [
            /* order */
            query(':enter', style({ opacity: 0 }), { optional: true }),
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 300px)' })
            , { optional: true }),
    // /* 2 */ group([  // block executes in parallel
                query(':leave', [
                    style({ transform: 'translateY(0)', opacity: 1 }),
                    animate('200ms ease-in-out', style({ transform: 'translateY(1em)', opacity: 0 }))
                ], { optional: true }),
                query(':enter', [
                    style({ transform: 'translateY(1em)', opacity: 0 }),
                    animate('200ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
                ], { optional: true })
            // ])
        ])
    ])
    ]
})
export class AppComponent {
    private document = document.firstElementChild;
    title = 'app';

    svgAttrs = {stroke: {width: 3, color: '#000'}, fill: {color: '#fff', opacity: 1}};
    coolThing = false;
    beCool = () => {
        this.coolThing = true;
        setTimeout(() => { this.coolThing = false; }, 1050);
    }
    dimens = (el: Element) => {
        console.log(el);
        const rect = el.getBoundingClientRect();
        return { top: rect.top, left: rect.left, height: rect.height, width: rect.width };
    }
    rectPath = (x: number, y: number, w: number, h: number, counterclock: Boolean = false) => {
        w = w + this.svgAttrs.stroke.width;
        h = h  + this.svgAttrs.stroke.width;
        let path = `M${x},${y} `;
        if (counterclock) {
            path += `${x},${y + h} ${x + w},${y + h} ${x + w},${y} Z`;
        } else {
            path += `${x + w},${y} ${x + w},${y + h} ${x},${y + h} Z`;
        }
        return path;
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
