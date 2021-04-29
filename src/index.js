import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    // This is the only time we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
 }
   // React says we have to define render!!

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
