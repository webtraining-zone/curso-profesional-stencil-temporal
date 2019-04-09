import {Component, Prop, State, Watch} from '@stencil/core';

@Component({
  tag: 'web-countries-finder',
  styleUrl: 'web-countries-finder.scss',
  shadow: true
})
export class WebCountriesFinder {
  @Prop() keyword: string = 'mexico';
  @State() countries: Array<any> = [];

  render() {

    return (
      <div class="web-c-countries-finder">
        <h2>Results ({this.countries.length})</h2>

        {this.countries.length == 0 ?
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div> :
          this.countries.map(country =>
            <div class="country-card">
              <div class="country-card__body">
                <div class="country-card__flag-container">
                  <div class="country-card__flag">
                    <span class="flag flag-ci"></span>
                  </div>
                </div>
                <div class="country-card__text-container">
                  <h3>{country.name.common}</h3>
                  <div class="bottom clearfix">
                    <p>
                      <strong>Official Name: </strong>{country.name.official}
                    </p>

                    <p>
                      <strong>Currency: </strong>{country.currency}
                    </p>
                    <p>
                      <strong>Languages: </strong><span>{this.mapObjectToArray(
                      country.languages)}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>,
          )
        }
      </div>
    );
  }

  mapObjectToArray(countriesObj) {
    const array = [];

    for (const countryKey in countriesObj) {
      if (countriesObj.hasOwnProperty(countryKey)) {
        array.push(countriesObj[countryKey]);
      }
    }

    return array;
  }

  getDataAndModifyState() {
    const serviceURL = `http://countries-finder-api.webtraining.fun/countries/search/${this.keyword}`;

    fetch(serviceURL).
      then((response: Response) => response.json()).
      then(response => {
        console.log(response);
        this.countries = this.mapObjectToArray(response);
      });

  }

  componentWillLoad() {
    this.getDataAndModifyState();
  }

  @Watch('keyword')
  watchHandler(newValue: string, oldValue: string) {
    console.log('New value for keyword', newValue, oldValue);
    this.getDataAndModifyState();
  }

}
