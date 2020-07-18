import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Screen from './Screen';
import config from './config';

export default function App() {
    return (
        <Container className='app'>
            <Screen.Header config={config} />
            <Screen.Profile config={config} />
            {/* <Screen.Gallery config={config} /> */}
            <Screen.Place config={config} />
            {/* <Screen.Comment config={config} /> */}
            <Screen.Footer />
        </Container>
    );
}
