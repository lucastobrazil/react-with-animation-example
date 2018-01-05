import React from 'react';
import './ExampleContent.css';
import AnimationPlayer from '../AnimationPlayer';
import { ExampleAutoPlay } from './content';
import Section from './section';

export default function ExampleContent() {
    return (
        <div className="ExampleContent">
            <div>
                <p>
                    <a href="https://github.com/SmallImprovements/react-with-animation">
                        https://github.com/SmallImprovements/react-with-animation
                    </a>
                </p>
                <p>Hint: open the console and watch as the CSS classes are added/removed at the end of the animation</p>
            </div>
            <Section>
                <h2>Animate manually</h2>
                <AnimationPlayer
                    className="ExampleContent-element"
                    animationClasses="ExampleContent-animated"
                    animateOnFirstRender={false}
                    animationDuration={1000}
                />
                <small>Use the element.startAnimation() method</small>
            </Section>
            <Section>
                <h2>Animate on render</h2>
                <ExampleAutoPlay
                    className="ExampleContent-element"
                    animationClasses="ExampleContent-animated"
                    animateOnFirstRender={true}
                />
                <small>
                    <strong>Note:</strong> This animation will only play once (refresh the page if you missed it!)
                </small>
            </Section>
            <Section>
                <h2>Coming soon: set animation-iteration-count</h2>
            </Section>
        </div>
    );
}
