import React from 'react';
import './ExampleContent.css';
import AnimationPlayer from '../AnimationPlayer';
import { ExampleAutoPlay } from './content';
import Section from './section';

export default function ExampleContent() {
    return (
        <div className="ExampleContent">
            <p>Hint: open the console and watch as the CSS classes are added/removed at the end of the animation</p>
            <Section>
                <h2>Animate once when component renders</h2>
                <ExampleAutoPlay
                    className="ExampleContent-element"
                    animationClasses="ExampleContent-animated"
                    animateOnFirstRender={true}
                />
                <p>
                    <strong>Note:</strong> This animation will only play once (refresh the page if you missed it!)
                </p>
            </Section>
            <Section>
                <h2>Trigger the animation manually</h2>
                <AnimationPlayer
                    className="ExampleContent-element"
                    animationClasses="ExampleContent-animated"
                    animateOnFirstRender={true}
                    animationDuration={1000}
                />
                <p>Use the element.startAnimation() method</p>
            </Section>
            <Section>
                <h2>Coming soon: set animation-iteration-count</h2>
            </Section>
        </div>
    );
}
