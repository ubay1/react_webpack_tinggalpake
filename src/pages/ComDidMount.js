import React, {Component} from 'react'

export default class ComDidMount extends Component{
  constructor(props) {
    super(props);

    this.state = {
      stateFuncCom : ''
    }
  };

  componentDidMount() {
    console.log('%challlo from componentDidMount', 'background: black; color: white; padding: 10px;')
  }
  
  render() {
    return (
      <div>

      </div>
    );
  }
}