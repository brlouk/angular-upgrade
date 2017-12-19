import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { ItemComponent } from './item.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Directive({
    selector: 'app-item'
})
export class ItemDirective extends UpgradeComponent {
    @Input() title: String;
    constructor(elementRef: ElementRef, injector: Injector) {
        super('ng1Item', elementRef, injector);
    }
}