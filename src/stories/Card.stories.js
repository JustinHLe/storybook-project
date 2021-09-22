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
    bodyText: "This is the card description. Anything can go into the card description and take up space",
    loading: false,
    mobile: false,
    dataTable: false,
    dataTiles: false
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
export const Loading = Template.bind({})
Loading.args = ({
    ...Base.args,
    loading: true
})
export const Mobile = Template.bind({})
Mobile.args = ({
    ...Base.args,
    mobile: true
})
export const DataTable = Template.bind({})
DataTable.args = ({
    ...Base.args,
    dataTable: true
})
export const DataTiles = Template.bind({})
DataTiles.args = ({
    ...Base.args,
    dataTiles: true
})