import styles from './styles/accordian.module.css'
import PropTypes, { array } from 'prop-types'
import { useState } from 'react'
export const Accordian = ({handleClick, action, arrayText, nested, innerArrayText}) => {
    function showContent(e,i){
        e.stopPropagation()
        if(e.target.className === 'accordian-module__box__1Qx9E'){
            handleClick()
            return;
        }
        const arrowToggle = e.target.firstChild.firstChild
        const contentToggle = e.target.lastChild
        arrowToggle.classList.toggle(styles.arrow_dropdown)
        if(e.target.id.includes('inner')){
            contentToggle.classList.toggle(styles.shown_inner)
            return;
        }
        contentToggle.classList.toggle(styles.shown)
    }
    if(nested){
        return (
            <body className={styles.wrapper}>
            <div className={styles.accordian_wrapper}> 
                {arrayText.map(({title,content},i)=>{
                    return(
                        <>
                        <div className={styles.row} id={`outer ${i}`} key = {i} onClickCapture={(e)=>{showContent(e,i)}}>
                            <div className={styles.info_container}>
                                <div className={styles.arrow} id = "test" style={{pointerEvents: 'none'}} style={{pointerEvents: 'none'}}></div>
                                <div className={styles.title}>{title}</div>
                                <div className={action ? styles.box : null} onClick={handleClick}>
                                    <div className={action ? styles.triangle : null}></div>
                                </div>
                            </div>
                            <div className={styles.hidden}>
                                {innerArrayText.map(({title, content, row},itr)=>{
                                    if(i === row){
                                        return(
                                            <>
                                            <div className={styles.inner_row} id = {`inner ${i}`} key={itr} onClickCapture={(e)=>{showContent(e,i)}}>
                                                <div className={styles.info_container}>
                                                    <div className={styles.arrow} id = "test" style={{pointerEvents: 'none'}} style={{pointerEvents: 'none'}}></div>
                                                    <div style={{pointerEvents: 'none', overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", display: 'block', width: '33vw'}}>{title}</div>
                                                </div>
                                                <div className={styles.hidden}>
                                                    <p>{content}</p>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }
                                })}
                            </div>
                        </div>  
                        </>
                    )
                })}
            </div>
        </body>   
        )
    }
    return(
        <body className={styles.wrapper}>
            <div className={styles.accordian_wrapper}> 
                {arrayText.map(({title,content},i)=>{
                    return(
                        <>
                        <div className={styles.row} id={`outer ${i}`} key = {i} onClickCapture={(e)=>{showContent(e,i)}}>
                            <div className={styles.info_container}>
                                <div className={styles.arrow} id = "test" style={{pointerEvents: 'none'}} style={{pointerEvents: 'none'}}></div>
                                <div className={styles.title}>{title}</div>
                                <div className={action ? styles.box : null} onClick={handleClick}>
                                    <div className={action ? styles.triangle : null}></div>
                                </div>
                            </div>
                            <div className={styles.hidden}>
                                <p>{content}</p>
                            </div>
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