import React from 'react';
import { withAnimation } from 'react-with-animation';

export const BasicExampleContent = ({ className, onAnimationEnd }) => (
    <div className={className} onAnimationEnd={onAnimationEnd}>
        Sample Content
    </div>
);

export const ExampleAutoPlay = withAnimation(BasicExampleContent);
