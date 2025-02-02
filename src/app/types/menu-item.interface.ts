export interface MenuItemNav {
    label?: string;
    icon?: string;
    routerLink?: string;
    component?: any;
    children?: MenuItemNav[];

}

export interface FormItem {
    label: string;
    icon: string;
    type: string;
    formControlName: string;
    placeholder?: string;
    validators?: any[];
  }