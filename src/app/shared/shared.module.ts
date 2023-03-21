import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';

const importExport = [ErrorMsgDirective];

@NgModule({
  declarations: [importExport],
  exports: [importExport],
})
export class SharedModule {}
