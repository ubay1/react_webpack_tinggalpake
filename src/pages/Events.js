import React, {Component} from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hallo',
      inputValue2: 'default value',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  // event handleOnChange, menerima inputan dari form
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    this.state.inputValue = e.target.value
    console.log(this.state.inputValue)
  }

  // onchange dengan default value
  handleChange2(stateName, e) {
    this.setState({
      [stateName]: e.target.value,
    });
    this.state.inputValue2 = e.target.value
    console.log(this.state.inputValue2)
  }

  render() {
   return (
     <div className="px-4 py-4 bg-blue-300 mx-4 rounded-md shadow-md">
      <input 
        type="text" 
        onKeyUp={this.handleChange}
        className="text-black shadow-md px-2 py-2 w-auto mb-1 rounded-md"
        placeholder="coba event onchange"
      ></input>
      <p className="mb-4">{this.state.inputValue}</p>

      {/* dynamic method onchange */}
      <input 
        type="text"
        value={this.state.inputValue2} 
        onChange={ (e) => {this.handleChange2('inputValue2', e)} }
        className="text-black shadow-md px-2 py-2 w-auto mb-1 rounded-md"
        placeholder="onchange dengan default value"
      ></input>
      <p className="mb-4">{this.state.inputValue2}</p>
    </div>
   ) 
  }
}