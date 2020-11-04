import React from 'react';
import '../css/tailwind.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="text-white relative bottom-0 w-full mt-4 font-bold text-xl text-center bg-green-500 p-4 footer">
        {/* menampilkan props pada class component */}
        {this.props.judul} <br/>
      </div>
    );
  };
}