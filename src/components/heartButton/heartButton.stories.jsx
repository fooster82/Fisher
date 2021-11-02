import React from 'react';

import { heartButton } from '.';

export default {
    title: 'Heart Button',
    component: heartButton      
};

const Template = args => <heartButton {...args}/>

export const Default = Template.bind({});