import React from 'react';
import withAnimation from 'react-with-animation';

export const BasicExampleContent = ({ className, style }) => (
    <div className={className} style={style}>
        Sample Content
    </div>
);

export const ExampleAutoPlay = withAnimation(BasicExampleContent);
