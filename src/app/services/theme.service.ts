import { computed, effect, Injectable, signal } from "@angular/core";
import { Subject } from "rxjs";
import { layoutConfig } from "../types/theme-config.interface";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private _LayoutConfig: layoutConfig = {
        preset: 'Aura',
        primary: 'emerald',
        surface: null,
        darkTheme: false,
        menuMode: 'static'
    };

    layoutConfig = signal<layoutConfig>(this.getConfig());
    transitionComplete = signal<boolean>(false);

    private configUpdate = new Subject<layoutConfig>();

    public configUpdate$ = this.configUpdate.asObservable();
    public theme = computed(() => (this.layoutConfig()?.darkTheme ? 'light' : 'dark'));

    private initialized = false;


    constructor() {
        effect(() => {
                    const config = this.layoutConfig();
                    if (config) {
                        this.onConfigUpdate();
                    }
                });

        effect(() => {
            const config = this.layoutConfig();
            this.handleDarkModeTransition(config);
            this.initialized = true;
            return
        });
    }



    private getConfig(): layoutConfig {
        const layoutConfig = JSON.parse(localStorage.getItem('layoutConfig') || JSON.stringify(this._LayoutConfig));
        return layoutConfig;
    }

    private setConfig(layoutConfig: layoutConfig): void {
        localStorage.setItem('layoutConfig', JSON.stringify(layoutConfig));
    }

    private onConfigUpdate(): void {
        this._LayoutConfig = { ...this.layoutConfig() };
        this.setConfig(this._LayoutConfig);
        this.configUpdate.next(this.layoutConfig());
    }

    private handleDarkModeTransition(config: layoutConfig): void {
        if ((document as any).startViewTransition) {
            this.startViewTransition(config);
        } else {
            this.toggleDarkMode(config);
            this.onTransitionEnd();
        }
    }

    private startViewTransition(config: layoutConfig): void {
        const transition = (document as any).startViewTransition(() => {
            this.toggleDarkMode(config);
        });

        transition.ready
            .then(() => {
                this.onTransitionEnd();
            })
            .catch(() => {});
    }

    private onTransitionEnd() {
        this.transitionComplete.set(true);
        setTimeout(() => {
            this.transitionComplete.set(false);
        });
    }

    public toggleDarkMode(config?: layoutConfig): void {
        const _config = config || this.layoutConfig();
        console.log('toogleDarkmode -> ', _config)
        if (_config.darkTheme) {
            document.documentElement.classList.add('app-dark');
        } else {
            document.documentElement.classList.remove('app-dark');
        }
    }

    public initialize(): void {
    }
}