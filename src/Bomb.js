// your Bomb code here!

import React from 'react';


class Bomb extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      secondsLeft: 0
    }
  }

  render() {
    return (
      <h1>seconds left before I go boom!{this.state.currentSlideIndex}</h1>
    )
  }
}

export default Bomb;