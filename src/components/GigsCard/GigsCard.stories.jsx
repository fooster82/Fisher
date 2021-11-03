import React from 'react';

import { GigsCard } from '.';

export default {
    title: 'GigsCard',
    component: GigsCard      
};

const Template = args => <GigsCard {...args}/>

export const Default = Template.bind({});