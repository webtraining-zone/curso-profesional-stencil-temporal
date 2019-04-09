import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'web-business-card',
  styleUrl: 'web-business-card.scss',
})
export class WebBusinessCard {

  @Prop() name: string;
  @Prop() jobPosition: string;
  @Prop() phone: string;
  @Prop() email: string;
  @Prop() website: string;

  render() {

    return (
      <div class="web-c-business-card">
        <div class="container">
          <div class="card">
            <div class="front">
              <div class="logo"><span></span></div>
            </div>
            <div class="back">
              <h1>{this.name}<span>{this.jobPosition}</span></h1>
              <ul>
                <li>{this.phone}</li>
                <li>{this.email}</li>
                <li>{this.website}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
