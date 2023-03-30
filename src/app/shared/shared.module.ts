import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

const importExport = [ErrorMsgDirective, CustomIfDirective];

@NgModule({
  declarations: [importExport],
  exports: [importExport],
})
export class SharedModule {}
