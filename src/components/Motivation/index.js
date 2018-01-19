import React from 'react';
import AnimatedText from '../Header/AnimatedText';
import './Motivation.css';

export default function Motivation() {
    return (
        <section className="Motivation">
            <div className="Motivation-inner">
                <AnimatedText>The Concept</AnimatedText>
                <p>
                    Let's say you want to temporarily add a CSS class to a React component to play a little animation,
                    and when the animation's finished, remove the class. Sounds like a simple enough thing to do, right?
                    We've been doing that for years in jQuery with{' '}
                    <pre>$('#myThing').addClass('animateMe').delay(3000).removeClass('animateMe');</pre>
                </p>
                <p>
                    In React, the <code>$('#myThing')</code>selector part is a bit different.
                </p>
                <p>
                    Because React is declarative in nature, we need a component that can handle imperatively telling
                    React which component we want to add (and remove) the CSS classes to. That's what this
                    react-with-animation does - it 'wraps' your component so that it always knows where it is in the
                    React DOM, and can apply and remove the animation when it's done.
                </p>

                <p>
                    There are plenty of ways to do this, but this project offers a simple, unified way to integrate such
                    animations into your already-existing components, without needing to add change them or add all the
                    boilerplate code each time.
                </p>

                <p>
                    Read more on{' '}
                    <a
                        href="https://github.com/SmallImprovements/react-with-animation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        the project on GitHub ➚
                    </a>
                </p>
            </div>
        </section>
    );
}
