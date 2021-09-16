import { Navbar } from '../Navbar'

//export default defines metadata about your component
export default {
    title: 'Nav Component',
    component: Navbar
};

const Template = args => <Navbar {...args}/>

export const Default = Template.bind({})
Default.args = ({
    wordSize: 'medium',
    heightSize: 'normal',
    navBackgroundColor: 'red'
})

export const Large = Template.bind({})
Large.args = ({
    ...Default.args,
    heightSize: "tall"
})

export const Small = Template.bind({})
Small.args = ({
    ...Default.args,
    heightSize: "tiny"
})