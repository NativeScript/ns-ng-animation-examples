
import { Component, ViewChild, Input } from "@angular/core";
import { AnimationBuilder, AnimationPlayer, style, animate } from "@angular/animations";
@Component({
    selector: 'loader',
    template: `
        <stack-layout>
            <button text="animate" (tap)="buildAnimation()"></button>
            <grid-layout class="box" #loadingBar></grid-layout>
        </stack-layout>`,
    styles: [
        `.box {
            height: 100;
            width: 100;
            background-color: green;
        }`,
    ],
})
export class AnimationBuilderComponent {
    @ViewChild('loadingBar')
    public loadingBar;

    public player: AnimationPlayer;
    private _percentage = 0;

    constructor(private _builder: AnimationBuilder) { }

    buildAnimation() {
        if (this.player) {
            this.player.destroy();
        }

        const factory = this._builder.build([
            style({ opacity: 1 }),
            animate(1000, style({ opacity: 0 }))
        ]);
        this.player = factory.create(this.loadingBar.nativeElement, {});
        this.player.play();
    }
}
