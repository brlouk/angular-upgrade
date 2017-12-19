import * as angular from 'angular';

import { ItemComponent } from './item/item.component';

export default angular.module('ng1App', []);

angular.module('ng1App', [])
    .component('ng1Item', ItemComponent);
