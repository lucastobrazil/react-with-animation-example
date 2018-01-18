import React from 'react';
import './Header.css';
export default function Header() {
    return (
        <header className="Header">
            <div className="Header-inner">
                <h1>React with Animation</h1>
                <h2>A Component and a Higher-Order-Component to manage short-lived CSS animations in React</h2>
            </div>
            <div className="Header-subheader">
                <div className="Header-inner">
                    <a href="https://github.com/SmallImprovements/react-with-animation">Code and Docs on GitHub</a>
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=smallimprovements&repo=react-with-animation&type=star&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="160px"
                        height="30px"
                        title="Star Me!"
                    />
                </div>
            </div>
        </header>
    );
}
