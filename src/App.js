import React, { Component } from 'react';
import ExampleContent from './components/ExampleContent';
import Header from './components/Header';
import Motivation from './components/Motivation';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <main>
                <Header />
                <ExampleContent />
                <Motivation />
                <Footer />
            </main>
        );
    }
}

export default App;
