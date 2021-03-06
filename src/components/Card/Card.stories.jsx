import React from 'react';

import { Card } from '.';

export default {
    title: 'Card',
    component: Card      
};

const Template = args => <Card {...args}/>

export const Default = Template.bind({});