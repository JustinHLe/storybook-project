import styles from './styles/navbar.module.css'
import PropTypes from 'prop-types'

export const Navbar = ({
    navBackgroundColor = "red", 
    wordSize = "medium", 
    heightSize = "normal"
}) => {
    const fonts = {
        small: '12px',
        medium: '20px',
        large: '32px'
    }
    const heights = {
        tiny: '20px',
        normal: '40px',
        tall: '100px'
    }
    return (
        <div className={styles.nav}
        style={{
            backgroundColor: navBackgroundColor,
            fontSize: fonts[wordSize],
            height: heights[heightSize]
        }}>
            test
        </div>
    )
};
Navbar.propTypes = {
    navBackgroundColor: PropTypes.string,
    wordSize: PropTypes.oneOf(['small', 'medium', 'large']),
    heightSize: PropTypes.oneOf(['tiny', 'normal', 'tall'])

}