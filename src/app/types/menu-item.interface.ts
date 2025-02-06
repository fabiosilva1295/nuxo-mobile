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
    typeValue: 'bool' | 'any'
    formControlName: string;
    placeholder?: string;
    callback?: VoidFunction;
    validators?: any[];
  }