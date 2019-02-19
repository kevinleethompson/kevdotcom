import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService, ScrollInfo } from 'src/app/services/scroll.service';
import { useAnimation, transition, trigger, state, style } from '@angular/animations';
import { fadeSlideIn, fadeSlideOut } from '../../animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('fadeSlide', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0 })),
            transition('false => true', [
                useAnimation(fadeSlideIn, {
                    params: {
                        xDistance: '1.5em',
                        yDistance: 0,
                        time: '100ms'
                    }
                })
            ]),
            transition('true => false', [
                useAnimation(fadeSlideOut, {
                    params: {
                        xDistance: '1.5em',
                        yDistance: 0,
                        time: '100ms'
                    }
                })
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    scrollInfo: ScrollInfo = { clientHeight: 0, scrollTop: 0 };
    checkVisibility = (el: Element, threshold: number = 40) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= this.scrollInfo.clientHeight - threshold;
    }
    updateScroll = (e: Event) => {
        this.scrollInfo = { clientHeight: e.srcElement.clientHeight, scrollTop: e.srcElement.scrollTop };
    }

    constructor() {}

    ngOnInit() { this.scrollInfo.clientHeight = document.firstElementChild.clientHeight; }

}
