import { Component } from '@angular/core';

class Link {
    constructor(public title: string, public link: string) {}
}

@Component({
    template: `
        <ListView [items]="links">
            <ng-template let-item="item">
                <Button
                    [text]="item.title"
                    [nsRouterLink]="item.link"
                ></Button>
            </ng-template>
        </ListView>
    `
})
export class AnimationsListComponent {
    public links: Link[] = [
        new Link("External animation", "/external"),
        new Link("Selector", "/selector"),
        new Link("Query with stagger", "/query-stagger"),
        new Link("Fade in/out animation", "/fade-in-out"),
        new Link("Animation with options", "/options"),
        new Link("Animation with default options", "/options-default"),
        new Link("Animate child", "/animate-child"),
        new Link("Angular docs animations", "/hero"),
        new Link("Animation Builder", "/animation-builder"),
    ]
}
