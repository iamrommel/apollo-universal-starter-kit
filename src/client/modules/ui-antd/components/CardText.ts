import { Component } from '@angular/core';

@Component({
  selector: 'card-text',
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export default class CardText {}
