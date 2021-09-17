import { Stack } from '../Stack'
import styles from '../styles/stack.module.css'

export default {
    title: 'Stk Component/Stack',
    component: Stack,
    argTypes: {
        numberOfRows: { type: 'number', defaultValue: 0},
        handleClick: { action: 'handleClick'}
    }
}
const Template = ({handleClick, numberOfRows, ...args}) => (
<Stack {...args}>
    {[...Array(numberOfRows).keys()].map(n=>{
            return (
            <div key ={n} className = {styles.bar}>
                {n+1}
                <input type="checkbox" onClick={handleClick}></input>
                </div>
            )
    })}
</Stack>
)

export const Empty = Template.bind({})
Empty.args = ({
    loading: false,
    empty: true,
})


export const Loading = Template.bind({})
Loading.args = ({
    loading: true,
    empty: true,
})

export const Filled = Template.bind({})
Filled.args = ({
    loading: false,
    empty: false,
    
})