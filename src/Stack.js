import styles from './styles/stack.module.css'
import PropTypes from 'prop-types'

export const Stack = ({empty,loading, children}) => {
    //loading state
    const loadingItem = (
        <div className = {styles.loading_bar}></div>
    )
    if(loading){
        return(
            <div className = {styles.loading_container}>
                {loadingItem}
                {loadingItem}
                {loadingItem}
                {loadingItem}
                {loadingItem}
                {loadingItem}
            </div>
        )
    }

    //empty state
    if(empty && !loading){
        return(
            <div className={styles.empty_container}>
                Your Stack is Empty :(
            </div>
        )
    }

    return(
        <div className = {styles.loading_container}>
            {children}
        </div>
    )
}


Stack.propTypes = {
    empty: PropTypes.bool,
    loading: PropTypes.bool,
}