import styles from './styles/stack.module.css'
import PropTypes from 'prop-types'

export const Stack = ({empty,loading, children, gap}) => {
    //loading state
    const loadingItem = (
        <div className = {styles.loading_bar}></div>
    )
    const gapSize = {
        noGap: '0px',
        normalGap: '20px',
        largeGap: '40px'
    }
    if((empty || children.length === 0)){
        return(
            <div className={styles.empty_container}>
                Your Stack is Empty :(
            </div>
        )
    }
    if(loading && children.length > 0){
        return(
            <div className = {styles.loading_container} style={{rowGap: gapSize[gap]}}>
                {children.map((item,i)=>{
                    return  loadingItem
                })}
            </div>
        )
    }
    return(
        <div className = {styles.loading_container} style={{rowGap: gapSize[gap]}}>
            {children}
        </div>
    )
}


Stack.propTypes = {
    empty: PropTypes.bool,
    loading: PropTypes.bool,
    gap: PropTypes.oneOf(['noGap', 'normalGap', 'largeGap'])
}