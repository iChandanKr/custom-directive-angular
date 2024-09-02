import { Directive,input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  },
  hostDirectives:[LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('myapp');
  constructor() {
    console.log('safe link directive is open');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do You want to leave the app?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address+'?from='+this.queryParam();
      console.log(address);

      return;
    }
    event.preventDefault();
  }

}
