import { Accordian } from '../Accordian'

export default {
    title: 'Design System/Accordian',
    component: Accordian,
    argTypes: { handleClick : {action : 'clicked'}}
}

const Template = args => <Accordian {...args} />

export const Default = Template.bind({})
Default.args=({
    action: false
})