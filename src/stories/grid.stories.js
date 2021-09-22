import { Grid } from '../Grid'


export default {
    title: 'CSS Grid',
    component: Grid,
}

const Template = args => <Grid {...args}/>


export const Default = Template.bind({})
Default.args = ({
    one: true,
    two: false,
    three: false
})


export const DefaultTwo = Template.bind({})
DefaultTwo.args = ({
    ...Default.args,
    two: true,
    one: false
})

export const DefaultThree = Template.bind({})
DefaultThree.args = ({
    ...Default.args,
    two: false,
    one: false,
    three: true
})