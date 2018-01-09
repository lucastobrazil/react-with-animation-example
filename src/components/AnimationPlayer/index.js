import { withAnimation } from 'react-with-animation';
import React from 'react';
import Button from '../Button';
import { BasicExampleContent } from '../ExampleContent/content';

const defaultProps = {
    exampleComponent: BasicExampleContent,
};

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
        const ExampleWithAnimation = withAnimation(this.props.exampleComponent);

        return (
            <div>
                <ExampleWithAnimation {...this.props} ref={this.setAnimatedComponentRef} />
                <p>
                    <Button onClick={this.start}>⟲ Replay Animation</Button>
                </p>
            </div>
        );
    }
}

AnimationPlayer.defaultProps = defaultProps;
