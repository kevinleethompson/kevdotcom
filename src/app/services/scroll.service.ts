import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

    private scrollObj: ScrollInfo = { scrollTop: 0, clientHeight: 0 };
    private scrollSubject: BehaviorSubject<ScrollInfo> = new BehaviorSubject(this.scrollObj);
    set scrollInfo(info: ScrollInfo) {
        this.scrollObj = info;
        this.scrollSubject.next(this.scrollObj);
    }
    get scrollObservable(): Observable<ScrollInfo> { return this.scrollSubject.asObservable(); }


    constructor() { }
}


export interface ScrollInfo {
    clientHeight: number;
    scrollTop: number;
}
