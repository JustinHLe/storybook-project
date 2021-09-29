import { Accordian } from '../Accordian'

export default {
    title: 'Design System/Accordian',
    component: Accordian,
    argTypes: { handleClick : {action : 'clicked'}}
}

const Template = args => <Accordian {...args} />

export const Default = Template.bind({})
Default.args=({
    action: false,
    nested: false,
    arrayText: [
    {
        title : "Veniam tempor dolore elit Lorem. Dolore ipsum id eiusmod elit. Nisi proident labore nostrud dolor deserunt elit tempor mollit. Enim esse ad ipsum fugiat reprehenderit excepteur sit. Est ex mollit amet esse sunt incididunt excepteur commodo excepteur ad aliqua consequat irure consectetur. Excepteur deserunt officia nostrud aute ut minim nisi mollit anim officia adipisicing in. Quis aliquip consequat adipisicing officia excepteur duis do aliqua et excepteur magna consectetur laborum nostrud.", 
        content : "Ut aute magna consectetur voluptate deserunt eu amet nisi officia esse tempor esse sint. Elit eu eiusmod Lorem duis nostrud aliqua culpa velit. Elit enim velit cupidatat eiusmod enim dolor consectetur nisi."
    }, 
    {
        title : "headerTwo",
        content : "bye"
    },
    {
        title : "headerThree",
        content : "cya"
    }
]
})

export const Nested = Template.bind({})
Nested.args=({
    ...Default.args,
    nested: true,
    innerArrayText: [
        {
            row: 0,
            title : "Inner header one", 
            content : "hi"
        }, 
        {
            row: 0,
            title : "ANOTHER ONE", 
            content : "DJ KHALED"
        }, 
        {
            row: 1,
            title : "Ea ea esse mollit quis amet sit dolore ullamco laboris aliqua magna excepteur. Eiusmod cillum aliqua ad culpa minim deserunt occaecat voluptate. Excepteur in non nulla in reprehenderit anim pariatur ad. Labore dolore deserunt deserunt adipisicing labore. Deserunt duis quis aute aute irure.",
            content : "Laborum irure enim mollit aute labore eiusmod ea cupidatat sint nulla laboris. Cillum mollit eiusmod esse dolor dolor eiusmod. Lorem labore nisi culpa incididunt sit adipisicing ex nulla elit cillum. Tempor non excepteur adipisicing sunt magna."
        },
        {
            row: 2,
            title : "Inner headerThree",
            content : "cya"
        } 
    ]
})