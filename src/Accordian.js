import styles from './styles/accordian.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
export const Accordian = ({handleClick, action}) => {
    function showContent(e){
        e.stopPropagation()
        if(e.target.className === 'accordian-module__box__1Qx9E'){
            handleClick()
            return;
        }
        const id = e.target.parentElement.lastChild.id
        const child = e.target.children[0].id
        if(document.getElementById(id).style.opacity == '0' || !document.getElementById(id).style.opacity){
            document.getElementById(id).style.opacity = '1'
            document.getElementById(id).style.height = 'auto'
            document.getElementById(child).style.transform = 'rotate(45deg)';
        } else {
            document.getElementById(id).style.opacity = '0'
            document.getElementById(id).style.height = '0'
            document.getElementById(child).style.transform = 'rotate(-45deg)';
        }
    }
    return(
        <body className={styles.wrapper}>
            <div className={styles.accordian_wrapper}> 
                <div id="1" onClickCapture={(e)=>{showContent(e)}}>
                    <div>
                        <div id = "dropdown one" className={styles.arrow} style={{pointerEvents: 'none'}}></div>
                        <span style={{pointerEvents: 'none'}}>RETRACTED INFO</span>
                        <div className={action ? styles.box : null}>
                            <div className={action ? styles.triangle : null}></div>
                        </div>
                    </div>
                    <div id="hidden 1">
                        <p>Velit ad non ipsum aliquip ex mollit ea sunt nisi. Ad esse ad anim excepteur consequat Lorem quis adipisicing laborum commodo aute laborum fugiat. 
                            Adipisicing adipisicing sint magna pariatur id et nulla aute sint ea ea. Exercitation sit voluptate eiusmod eu 
                            nulla eu ex duis dolore. Do officia nulla elit occaecat do est irure amet et deserunt fugiat do aliquip. Dolore et consectetur eiusmod cupidatat nisi excepteur cupidatat fugiat cillum 
                            reprehenderit ea aliqua cillum aliquip.</p>
                    </div>
                </div>
                <div id="2" onClickCapture={(e)=>{showContent(e)}}>
                    <div>
                        <div id = "dropdown two" className={styles.arrow} style={{pointerEvents: 'none'}} style={{pointerEvents: 'none'}}></div>
                        <span style={{pointerEvents: 'none'}}>CLASSIFIED</span>
                        <div className={action ? styles.box : null} onClick={handleClick}>
                            <div className={action ? styles.triangle : null}></div>
                        </div>
                    </div>
                    <div id="hidden 2">
                        <p>Dolor incididunt cupidatat magna laborum aliquip labore id qui dolore ut commodo proident anim aliquip. Ea nisi adipisicing veniam ullamco cupidatat eu occaecat. Id Lorem exercitation aliqua tempor veniam adipisicing. Non fugiat consectetur consectetur voluptate enim laboris amet consectetur sint labore proident. Sunt commodo adipisicing cillum ex exercitation ullamco. Id qui magna esse reprehenderit nisi irure ut culpa officia.</p>
                    </div>
                </div>  
                <div id="3" onClickCapture={(e)=>{showContent(e)}} style={{borderBottom:"none"}}>
                    <div>
                        <div id = "dropdown three" className={styles.arrow} style={{pointerEvents: 'none'}} style={{pointerEvents: 'none'}}></div>
                        <span style={{pointerEvents: 'none'}}>REDACTED</span>
                        <div className={action ? styles.box : null} onClick={handleClick}>
                            <div className={action ? styles.triangle : null}></div>
                        </div>
                    </div>
                    <div id="hidden 3">
                        <p>Exercitation ex nisi pariatur elit non ad dolor anim ad est nisi eu.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

Accordian.PropTypes=({

})