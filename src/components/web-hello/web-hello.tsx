import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'web-component-hello',
})
export class WebHello {

  @Prop() firstName: string;
  @Prop({attr: 'website-url'}) websiteURL: string;

  sum(a: number, b: number) {
    return a + b;
  }

  render() {

    return (
      <div class="web-c-hello">
        Hello {this.firstName} {this.websiteURL}
      </div>
    );
  }

}
