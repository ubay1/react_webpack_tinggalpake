import React, {Component} from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      construct: this.props.propsConstruct,
      txtState: 'ini text dari state'
    },
    // binding method = agar bisa mengakses state atau props
    this.handleEvent2 = this.handleEvent2.bind(this);
    this.rubahData = this.rubahData.bind(this);
  }

  handleEvent2(props) {
    alert(this.props.propsConstruct);
  }

  // handle event dengan parameter
  handleEvent3(data) {
    alert(data);
  }

  // rubah data dengan setState
  rubahData() {
    this.setState((state, props) => {
      return {
        txtState: 'merubah nilai dari state txtState: `ini text dari state` menjadi ini',
        construct: `merubah nilai dari props this.props.propsConstruct: ${this.props.propsConstruct} menjadi ini`
      }
    })
  }
  
  render() {
    return(
      <div className="bg-red-600 text-white mx-4 mb-4 shadow-md rounded-md flex flex-col py-4 mt-4 justify-center items-center">
        <ul className="mb-2">
          <li className="px-2 py-2">- {this.props.propsClass}</li>
          <li className="px-2 py-2">- {this.state.construct}</li>
          <li className="px-2 py-2">- {this.state.txtState}</li>
        </ul>
        <div className="mb-5">
          <a 
            onClick={this.handleEvent2}
            className="bg-yellow-400 hover:bg-yellow-600 cursor-pointer shadow-md px-2 py-2 text-black rounded-md"
          >
            handle Event pada class component
          </a>
        </div>
        <div className="mb-5">
          <a 
            onClick={ () => {this.handleEvent3('ini handle event dengan parameter')} }
            className="bg-yellow-400 hover:bg-yellow-600 cursor-pointer shadow-md px-2 py-2 text-black rounded-md"
          >
            handle Event dengan parameter
          </a>
        </div>

        <div className="mb-5">
          <a 
            onClick={this.rubahData}
            className="bg-yellow-400 hover:bg-yellow-600 cursor-pointer shadow-md px-2 py-2 text-black rounded-md"
          >
            rubah data state dan props dengan <b>setState</b>
          </a>
        </div>
      </div>
    )
  }
}