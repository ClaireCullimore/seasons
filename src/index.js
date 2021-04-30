import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import SemanticUI from "semantic-ui-css/semantic.min.css";



class App extends React.Component {
 //  constructor(props) {
 //    super(props);

 //    // This is the only time we do direct assignment to this.state
 //    this.state = { lat: null, errorMessage: '' };
 // }

    state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }


   // React says we have to define render!!

//   render() {
//     return (
//       <div>
//       Latitude: {this.state.lat}
//       <br />
//       Error: {this.state.errorMessage}
//     </div>
//     );
//   }
// }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>;
  }
}

ReactDom.render(<App S={SemanticUI} />, document.querySelector('#root'))
