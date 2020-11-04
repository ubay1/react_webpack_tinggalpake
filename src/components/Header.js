import React from 'react'
import '../css/tailwind.css'

// sass
// import './header.scss'

const headerStyle = {
  backgroundColor: 'blue',
}
  
// function component Header
export default function Header(props) {
    return (
      <div className="text-white font-bold text-xl text-center bg-green-500 p-4">
        {/* menampilkan props pada function component */}
        {props.judul}
      </div>
    );
}