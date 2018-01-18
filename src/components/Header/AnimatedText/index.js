import { withAnimation } from 'react-with-animation';
import React from 'react';
import './AnimatedText.css';
<h1>React with Animation</h1>;

export const HeaderText = ({ className, style }) => (
    <h1 className={className} style={style}>
        React with Animation
    </h1>
);

export default class AnimationPlayer extends React.Component {
    start = () => {
        if (this.animatedComponentRef) {
            this.animatedComponentRef.startAnimation();
        }
    };

    setAnimatedComponentRef = el => {
        this.animatedComponentRef = el;
    };

    render() {
        const TextWithAnimation = withAnimation(HeaderText);

        return (
            <div className="AnimatedText">
                <TextWithAnimation
                    animationClasses="AnimatedText-animating"
                    animateOnFirstRender={true}
                    ref={this.setAnimatedComponentRef}
                />
                <button className="AnimatedText-button" onClick={this.start}>
                    ⟲
                </button>
            </div>
        );
    }
}
