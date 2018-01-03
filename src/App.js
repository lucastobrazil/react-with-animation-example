import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withAnimation from 'react-with-animation';

function Example(props) {
    return <div {...props}>EXAMPLE</div>;
}
const ExampleWithAnimation = withAnimation(Example);
class App extends Component {
    render() {
        return (
            <div className="App">
                <ExampleWithAnimation
                    animateOnFirstRender={true}
                    animationClasses={'Example-animating'}
                    animationDuration={2000}
                />
            </div>
        );
    }
}

export default App;
