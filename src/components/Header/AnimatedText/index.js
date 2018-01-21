import { withAnimation } from 'react-with-animation';
import React from 'react';
import './AnimatedText.css';

export const HeaderText = ({ className, onAnimationEnd, children }) => (
    <h1 className={className} onAnimationEnd={onAnimationEnd} children={children} />
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
        const { children } = this.props;
        const TextWithAnimation = withAnimation(HeaderText);

        return (
            <div className="AnimatedText">
                <TextWithAnimation
                    animationClasses="AnimatedText-animating"
                    animateOnFirstRender={true}
                    ref={this.setAnimatedComponentRef}
                >
                    {children}
                </TextWithAnimation>
                <button className="AnimatedText-button" onClick={this.start}>
                    ⟲
                </button>
            </div>
        );
    }
}
