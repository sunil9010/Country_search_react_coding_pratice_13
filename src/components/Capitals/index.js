import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {captalList: countryAndCapitalsList[0].id}

  getIt = event => {
    this.setState({captalList: event.target.value})
  }

  capital = () => {
    const {captalList} = this.state
    const Active = countryAndCapitalsList.find(every => every.id === captalList)
    return Active.country
  }

  render() {
    const {captalList} = this.state
    const getCaptial = this.capital(captalList)
    console.log(captalList)
    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="search">
            <select
              id="capital"
              className="selectTag"
              onChange={this.getIt}
              value={captalList}
            >
              {countryAndCapitalsList.map(every => (
                <option value={every.id} key={every.id}>
                  {every.capitalDisplayText}
                </option>
              ))}
            </select>
            <p htmlFor="capital" className="label">
              is capital of which country
            </p>
          </div>
          <h1>{getCaptial}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
