import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

// Menu
export interface Menu {
    headTitle?: string;
    headTitle2?: string;
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    badgeClass?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root',
})
export class NavService implements OnDestroy {
    private unsubscriber: Subject<any> = new Subject();
    public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
        window.innerWidth
    );

    // Search Box
    public search: boolean = false;

    // Language
    public language: boolean = false;

    // Mega Menu
    public megaMenu: boolean = false;
    public levelMenu: boolean = false;
    public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

    // Collapse Sidebar
    public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

    // For Horizontal Layout Mobile
    public horizontal: boolean = window.innerWidth < 991 ? false : true;

    // Full screen
    public fullScreen: boolean = false;

    constructor(private router: Router) {
        this.setScreenWidth(window.innerWidth);
        fromEvent(window, 'resize')
            .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
            .subscribe((evt: any) => {
                this.setScreenWidth(evt.target.innerWidth);
                if (evt.target.innerWidth < 991) {
                    this.collapseSidebar = true;
                    this.megaMenu = false;
                    this.levelMenu = false;
                }
                if (evt.target.innerWidth < 1199) {
                    this.megaMenuColapse = true;
                }
            });
        if (window.innerWidth < 991) {
            // Detect Route change sidebar close
            this.router.events.subscribe((event) => {
                this.collapseSidebar = true;
                this.megaMenu = false;
                this.levelMenu = false;
            });
        }
    }

    ngOnDestroy() {
        this.unsubscriber.next;
        this.unsubscriber.complete();
    }

    private setScreenWidth(width: number): void {
        this.screenWidth.next(width);
    }

    MENUITEMS: Menu[] = [
        {
            title: 'Angular Training',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/training',
        },
        {
            title: 'Lesson One',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/les-one',
        },
        {
            title: 'Lesson Two',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/les-two',
        },
        {
            title: 'Lesson Three',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/les-three',
        },
        {
            title: 'Lesson Four',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/les-four',
        },
        {
            title: 'Lesson Five',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/les-five',
        },
        {
            headTitle: 'Quản lý thư viện',
        },
        {
            title: 'Bạn đọc',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/ban_doc',
        },
        {
            title: 'Mượn sách',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/muon_sach',
        },
        {
            title: 'NXB',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/nxb',
        },
        {
            title: 'Sách',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/sach',
        },
        {
            title: 'Tác Giả',
            icon: 'grid',
            type: 'link',
            active: true,
            path: '/pages/tg',
        },
    ];
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
