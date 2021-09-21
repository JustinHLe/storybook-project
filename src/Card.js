import styles from './styles/card.module.css'
import PropTypes from 'prop-types'


export const Card = ({footer,header,body,multiAction, handleClick, bodyPadding, bodyText}) => {
    //only header
    const padding = {
        noPadding: '0',
        normalPadding: '20px'
    }
    if(!body && !footer && header && !multiAction){
        return (
            //article is a self contained piece of content which could be reused
            //a section of content that forms an independent part of the website
            <article id = "header card">
                {/*header is used to define the header of a document or section*/}
                <header>
                    <div className={styles.card_container}>
                        <div className={styles.header}>
                            <span>
                                <div className={styles.img}/>
                            </span>
                            <span>
                                <h3 className={styles.header_text}>Heading</h3>
                            </span>
                            <div className={styles.action_container}>
                                <span className={styles.link} onClick={handleClick}>New</span>
                            </div>
                        </div>
                    </div>
                </header>
            </article>
        )
    }
    if(!body && !footer && header && multiAction){
        return (
            <article id = "header card">
                <header>
                    <div className={styles.card_container}>
                        <div className={styles.header}>
                            <span>
                                <div className={styles.img}/>
                            </span>
                            <span>
                                <h3 className={styles.header_text}>Heading</h3>
                            </span>
                            <div className={styles.action_dropdown}>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.dropdown_menu}>
                                <ul className={styles.ul}>
                                        <li className={styles.list_item} onClick={handleClick}>Action One</li>
                                        <li className={styles.list_item} onClick={handleClick}>Action Two</li>
                                        <li className={styles.list_item} onClick={handleClick}>Action Three</li>
                                </ul>          
                            </div>
                        </div>
                    </div>
                </header>
            </article>
        )
    }
    //no header
    if(body && footer && !header){
        return (
            <article id = "body card">
                <div className={styles.card_container}>
                    <div className={styles.body} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    {/*footer represents footer section of a document or section */}
                    <hr className={footer ? styles.line : styles.hidden}/>
                    <footer>
                        <div className={styles.footer}>
                            <a className={styles.link} onClick={handleClick}>View All</a>
                        </div>
                    </footer>
                </div>
            </article>
        )
    }
    //no footer
    if(body && !footer && header){
        return (
            <article id = "base card">
            <div className={styles.card_container}>
                <header>
                        <div className={styles.header}>
                            <span>
                                <div className={styles.img}/>
                            </span>
                            <span>
                                <h3 className={styles.header_text}>Heading</h3>
                            </span>
                            <div className={multiAction ? styles.hidden : styles.action_container}>
                                <span className={styles.link} onClick={handleClick}>New</span>
                            </div>
                            <div className={multiAction ? styles.action_dropdown : styles.hidden}>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={multiAction ? styles.dropdown_menu : styles.hidden}>
                                <ul className={styles.ul}>
                                        <li className={styles.list_item} onClick={handleClick}>Action One</li>
                                        <li className={styles.list_item} onClick={handleClick}>Action Two</li>
                                        <li className={styles.list_item} onClick={handleClick}>Action Three</li>
                                </ul>          
                            </div>
                        </div>
                </header>
                    <div className={styles.body} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    <hr className={footer ? styles.line : styles.hidden}/>
            </div>
        </article>
        )
    }
    //base
    return(
        <article id = "base card">
            <div className={styles.card_container}>
                <header>
                        <div className={header ? styles.header : styles.hidden}>
                            <span>
                                <div className={styles.img}/>
                            </span>
                            <span>
                                <h3 className={styles.header_text}>Heading</h3>
                            </span>
                            <div className={multiAction ? styles.hidden : styles.action_container}>
                                <span className={styles.link} onClick={handleClick}>New</span>
                            </div>
                            <div className={multiAction ? styles.action_dropdown : styles.hidden}>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={multiAction ? styles.dropdown_menu : styles.hidden}>
                                <ul className={styles.ul}>
                                        <li className={styles.list_item} onClick={handleClick}>Action One</li>
                                        <li className={styles.list_item} onClick={handleClick}>Action Two</li>
                                        <li className={styles.list_item} onClick={handleClick}>Action Three</li>
                                </ul>          
                            </div>
                        </div>
                </header>
                    <div className={body ? styles.body : styles.hidden} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    <hr className={footer ? styles.line : styles.hiddens}/>
                    <footer>
                        <div className={footer ? styles.footer : styles.hidden}>
                            <a className={styles.link} onClick={handleClick}>View All</a>
                        </div>
                    </footer>
            </div>
        </article>
    )
}

Card.propTypes={
    footer: PropTypes.bool,
    header: PropTypes.bool,
    body: PropTypes.bool,
    multiAction: PropTypes.bool,
    handleClick: PropTypes.func,
    bodyPadding: PropTypes.oneOf(['noPadding', 'normalPadding'])
}