import React, { Component } from 'react';
import { getJson } from './apiContext'

export const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)

export const About = () => (
    <div>
        <h1>About</h1>
    </div>
)

export const Gear = () => (
    <div>
        <h1>Gear</h1>
    </div>
)

export const Bikes = () => (
    <div>
        <h1>Bikes</h1>
        <h3> { getJson() }</h3>
    </div>
)

export const Details = () => (
    <div>
        <h1>Details</h1>
        
    </div>
)