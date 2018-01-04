import React from 'react';
import withAnimation from 'react-with-animation';

export const BasicExampleContent = props => <div {...props}>Sample Content</div>;
export const ExampleAutoPlay = withAnimation(BasicExampleContent);
