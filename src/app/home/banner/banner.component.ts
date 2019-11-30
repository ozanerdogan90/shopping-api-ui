import { Component, Input } from '@angular/core';

@Component({
    templateUrl: 'banner.component.html',
    selector: 'app-banner',
    styleUrls: ['banner.component.scss']
})
export class BannerComponent {
    @Input() isActive = false;
}
