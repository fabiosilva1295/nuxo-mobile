export interface MenuItemNav {
    label?: string;
    icon?: string;
    routerLink?: string;
    component?: any;
    children?: MenuItemNav[];

}