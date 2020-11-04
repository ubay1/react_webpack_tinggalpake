import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";
import List from './List.js';
import Events from './Events.js';
import ComDidMount from './ComDidMount.js';

export default function HomePage() {
    function handleEvent() {
        alert('success ke-triger event ini');
    }
    return (
        <div className="text-red-600 h-full m-auto text-center">
            <div className="mb-4 ">
                ini Home
            </div>

            <div>
                <Link 
                    to="/about" 
                    className="bg-blue-600 hover:bg-blue-500 m-2 px-2 py-2 rounded-md text-white shadow-md"
                >
                    About
                </Link>
            </div>

            <List propsClass="menampilkan props pada class components" propsConstruct="menampilkan props pada constructor"/>

            <div className="mb-4">
                <a 
                    onClick={handleEvent}
                    className="bg-green-800 hover:bg-green-600 cursor-pointer shadow-md px-2 py-2 text-white rounded-md"
                >
                    handle Event pada function component
                </a>
            </div>

            <div className="mb-4">
                <Events />
            </div>

            <div className="mb-4">
                <ComDidMount />
            </div>
            
        </div>
    );
}
