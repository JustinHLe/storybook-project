import styles from './styles/accordian.module.css'
import PropTypes, { array } from 'prop-types'
import { useState } from 'react'
export const Accordian = ({handleClick, action, arrayText}) => {
    function showContent(e){
        e.stopPropagation()
        if(e.target.className === 'accordian-module__box__1Qx9E'){
            handleClick()
            return;
        }
        const arrowToggle = e.target.firstChild.firstChild
        const contentToggle = e.target.nextSibling
        arrowToggle.classList.toggle(styles.arrow_dropdown)
        contentToggle.classList.toggle(styles.shown)
    }
    return(
        <body className={styles.wrapper}>
            <div className={styles.accordian_wrapper}> 
                {arrayText.map(({title,content},i)=>{
                    return(
                        <>
                        <div className={styles.row} id={i} key = {i} onClickCapture={(e)=>{showContent(e,i)}}>
                            <div className={styles.info_container}>
                                <div className={styles.arrow} id = "test" style={{pointerEvents: 'none'}} style={{pointerEvents: 'none'}}></div>
                                <span style={{pointerEvents: 'none'}}>{title}</span>
                            </div>
                            <div className={action ? styles.box : null} onClick={handleClick}>
                                    <div className={action ? styles.triangle : null}></div>
                            </div>
                        </div>  
                        <div className={styles.hidden}>
                                <p>{content}</p>
                        </div>
                        </>
                    )
                })}
            </div>
        </body>
    )
}

Accordian.propTypes=({

})