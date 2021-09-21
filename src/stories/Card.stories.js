import {Card} from '../Card'


export default {
    title:'Design System/Card',
    component: Card,
    argTypes: { handleClick: {action: 'clicked'}}
}


const Template = args => <Card {...args}></Card>


export const Base = Template.bind({})
Base.args = ({
    footer: true,
    body: true,
    header: true,
    multiAction: false,
    bodyPadding: 'normalPadding',
    bodyText: "This description goes directly into the body and takes up space"
})

export const OnlyHeader = Template.bind({})
OnlyHeader.args = ({
    ...Base.args,
    body: false,
    footer: false,
})
export const OnlyHeaderWithAction = Template.bind({})
OnlyHeaderWithAction.args = ({
    ...Base.args,
    body: false,
    footer: false,
    multiAction: true
})
export const NoHeader = Template.bind({})
NoHeader.args = ({
    ...Base.args,
    header: false
})

export const NoFooter = Template.bind({})
NoFooter.args = ({
    ...Base.args,
    footer: false
})