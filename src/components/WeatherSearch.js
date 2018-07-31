import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByZip, fetchWeatherByCity, fetchWeatherByCurrentLocation, fetchIntlWeather } from '../actions';
import { Breadcrumb, Button } from 'semantic-ui-react';


class WeatherSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      zipSearch: '',
      citySearch: '',
      intlSearch: '',
      activeForm: 'citySearch'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log('in weatherSearch', this.state)})
  }

  handleClick = (formName) => {
    this.setState({
      activeForm: formName
    }, ()=>{console.log('changing the weather search form', this.state)})
  }

  render() {
    console.log('current User in Weather Search', this.props.currentUser)
    return (
      <div
        style={{
          padding: '20px', fontFamily: 'Nunito, sans-serif'
        }}>
        <Breadcrumb className='hovering' size='huge' style={{margin: '30px 0px'}} >
          <Breadcrumb.Section active={this.state.activeForm === 'citySearch'} style={{color: 'white'}} onClick={() => this.handleClick('citySearch')}>Search by City, State</Breadcrumb.Section>
          <Breadcrumb.Divider style={{margin: '8px'}}/>
          <Breadcrumb.Section active={this.state.activeForm === 'zipSearch'} style={{color: 'white'}} onClick={() => this.handleClick('zipSearch')}>Search by ZIP Code</Breadcrumb.Section>
          <Breadcrumb.Divider style={{margin: '8px'}}/>
          <Breadcrumb.Section active={this.state.activeForm === 'intlSearch'} style={{color: 'white'}} onClick={() => this.handleClick('intlSearch')}>Search Internationally</Breadcrumb.Section>
        </Breadcrumb>

        {(this.state.activeForm === 'zipSearch')
          ? <form
              style={{margin: '30px 0px'}}
              onSubmit={(e) => {
              e.preventDefault();
              console.log('were in the onSubmit', this.state.zipSearch)
              this.props.fetchWeatherByZip(this.props.currentUser, this.state.zipSearch)}}
            >
              <input
                type="text"
                placeholder="Enter Zip Code (US Only)"
                name="zipSearch"
                value={this.state.zipSearch}
                style={{width: '400px'}}
                onChange={(event) => this.handleChange(event)}
              />
              <Button size='large' type='submit' style={{fontFamily: 'Nunito, sans-serif', borderRadius: '30px'}}>
                Get the Weather
              </Button>
              <p>Powered by <a href="https://darksky.net/poweredby/" style={{color:'white'}}>Dark Sky</a> and <a href="https://openweathermap.org/" style={{color:'white'}}>OpenWeatherMap</a></p>
          </form>
          : null
        }

        {(this.state.activeForm === 'citySearch')
          ? <form
              style={{margin: '30px 0px'}}
              onSubmit={(e) => {
                e.preventDefault();
                this.props.fetchWeatherByCity(this.props.currentUser, this.state.citySearch)}}>
              <input
                type="text"
                name="citySearch"
                placeholder="Enter City, State (US Only)"
                value={this.state.citySearch}
                style={{width: '400px'}}
                onChange={(event) => this.handleChange(event)}
              />
              <Button size='large' type='submit' style={{fontFamily: 'Nunito, sans-serif', borderRadius: '30px'}} >
                  Get the Weather
              </Button>
              <p>Powered by <a href="https://darksky.net/poweredby/" style={{color:'white'}}>Dark Sky</a> and <a href="https://geocode.xyz/" style={{color:'white'}}>Geocode.xyz</a></p>
            </form>
          : null
        }

        {(this.state.activeForm === 'intlSearch')
        ? <form
            style={{margin: '30px 0px'}}
            onSubmit={(e) => {
              e.preventDefault();
              this.props.fetchIntlWeather(this.props.currentUser, this.state.intlSearch)}}>
            <input
              type="text"
              name="intlSearch"
              placeholder="Enter City, Country"
              value={this.state.intlSearch}
              style={{width: '400px'}}
              onChange={(event) => this.handleChange(event)}
            />
          <Button size='large' type='submit' style={{fontFamily: 'Nunito, sans-serif', borderRadius: '30px'}} >
              Get the Weather
          </Button>
          <p>Powered by <a href="https://darksky.net/poweredby/" style={{color:'white'}}>Dark Sky</a> and <a href="https://geocode.xyz/" style={{color:'white'}}>Geocode.xyz</a></p>
          </form>
          : null
        }
        <form onSubmit={(e) => {
            e.preventDefault();
            navigator.geolocation.getCurrentPosition((resp)=>this.props.fetchWeatherByCurrentLocation(this.props.currentUser, resp))}}>
          <Button inverted size='big' type='submit' style={{marginTop: '25px', fontFamily: 'Nunito, sans-serif', borderRadius: '30px'}} >
            Search By Current Location
          </Button>
        </form>
        <a href="https://darksky.net/poweredby/"><img alt="Powered by Dark Sky" src="https://darksky.net/dev/img/attribution/poweredby-oneline.png" style={{width: '15%', paddingTop: '25px'}}/></a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
  }
}

export default connect(mapStateToProps, { fetchWeatherByZip, fetchWeatherByCity, fetchWeatherByCurrentLocation, fetchIntlWeather })(WeatherSearch);
