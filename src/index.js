import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    // This is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
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
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
