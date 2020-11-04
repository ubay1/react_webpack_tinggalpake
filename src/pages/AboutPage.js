import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";

// function component About page
const AboutPage = function() { 
    const nama = 'ini about'; // parsing nilai
    return (
        <div className="text-red-600 h-screen m-auto text-center">
            <div className="mb-4">{nama}</div>
            <Link to="/" className="bg-blue-300 m-2 px-2 py-2 rounded-md text-black">Home</Link>
        </div>
    );
}

export default AboutPage;
