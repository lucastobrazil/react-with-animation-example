import React, { Component } from 'react';
import ExampleContent from './components/ExampleContent';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <main>
                <Header />
                <ExampleContent />
            </main>
        );
    }
}

export default App;
