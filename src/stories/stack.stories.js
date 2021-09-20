import { Stack } from '../Stack'
import styles from '../styles/stack.module.css'

export default {
    title: 'Stk Component/Stack',
    component: Stack,
    argTypes: {
        numberOfRows: { type: 'select', options: [0,1,2,3,4,5,6], defaultValue: 0},
        handleClick: { action: 'handleClick'}
    }
}



const Template = ({handleClick, numberOfRows, loading, ...args}) => (
<Stack loading = {loading} {...args}>
    {[...Array(numberOfRows).keys()].map(n=>{
            return (
            <div key ={n} className = {loading ? styles.loading_bar : styles.bar}>
                <span className = {loading ? styles.hidden : styles.num}>{n+1}</span>
                <input type="checkbox" className = {loading ? styles.hidden : styles.checkbox} onClick={handleClick}></input>
            </div>
            )
    })}
</Stack>
)

export const Empty = Template.bind({})
Empty.args = ({
    loading: false,
    empty: true,
    gap: 'normalGap'
})
Empty.parameters = { controls: { exclude: ['numberOfRows', 'loading','gap'] } }


export const Loading = Template.bind({})
Loading.args = ({
    loading: true,
    empty: false,
    gap: 'normalGap'
})

export const Filled = Template.bind({})
Filled.args = ({
    loading: false,
    empty: false,
    gap: 'normalGap'
})