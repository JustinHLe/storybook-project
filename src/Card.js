import styles from './styles/card.module.css'
import PropTypes from 'prop-types'


export const Card = ({footer,header,body,multiAction, handleClick, bodyPadding, bodyText, loading, mobile, dataTable}) => {
    //only header
    const padding = {
        noPadding: '0',
        normalPadding: '20px'
    }
    if(loading){
        return (
            <article id = "loading card">
            <header>
                <div className={styles.card_container}>
                    <div className={styles.header}>
                        <span>
                            <div className={styles.img}/>
                        </span>
                        <span>
                            <h3 className={styles.header_text}>Heading</h3>
                        </span>
                    </div>
                    <div className={styles.spinner_container}>
                        <div className={styles.loader}></div>
                    </div>
                </div>
            </header>
        </article> 
        )
    }
    if(mobile){
        return (
            <article id = "mobile card">
            <div className={styles.card_container} style={{borderTop: 'none', borderRadius:"0", width: '70vw'}}>
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
                        </div>
                </header>
                    <div className={body && bodyText ? styles.body : styles.hidden} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    <hr className={footer && bodyText && header ? styles.line : styles.hidden}/>
                    <footer>
                        <div className={footer && bodyText ? styles.footer : styles.hidden}>
                            <a className={styles.link} onClick={handleClick}>View All</a>
                        </div>
                    </footer>
            </div>
        </article>
        )
    }
    if(dataTable){
        return(
            <article id = "data table card">
            <div className={styles.card_container}>
                <header>
                        <div className={header ? styles.header : styles.hidden}>
                            <span>
                                <div className={styles.contact_img}/>
                            </span>
                            <span>
                                <h3 className={styles.header_text}>Contacts</h3>
                            </span>
                            <div className={multiAction ? styles.hidden : styles.action_container}>
                                <span className={styles.link} onClick={handleClick}>New</span>
                            </div>
                        </div>
                </header>
                    <div className={styles.data_body}>
                        <table cellSpacing="0" className={styles.table}>
                            <tr align="left" className={styles.header_row}>
                                <th className={styles.header_row_elem}>Name</th>
                                <th className={styles.header_row_elem}>Company</th>
                                <th className={styles.header_row_elem}>Title</th>
                                <th className={styles.header_row_elem}>Email</th>
                            </tr>
                            <tr align="left" className={styles.data_row}>
                                <td className={styles.data_row_elem}>Master Chief</td>
                                <td className={styles.data_row_elem}>ONI</td>
                                <td className={styles.data_row_elem}>Petty Officer</td>
                                <td className={styles.data_row_elem}>MasterChief@gmail.com</td>
                            </tr>
                        </table>
                    </div>
                    <hr className={footer && bodyText && header ? styles.line : styles.hidden}/>
                    <footer>
                        <div className={footer && bodyText ? styles.footer : styles.hidden}>
                            <a className={styles.link} onClick={handleClick}>View All</a>
                        </div>
                    </footer>
            </div>
        </article> 
        )
    }
    if(!body && !footer && header && !multiAction){
        return (
            //article is a self contained piece of content which could be reused
            //a section of content that forms an independent part of the website
            <article id = "header no action card">
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
            <article id = "header action card">
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
                    <div className={bodyText ? styles.body : styles.hidden} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    {/*footer represents footer section of a document or section */}
                    <hr className={footer && bodyText ? styles.line : styles.hidden}/>
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
            <article id = "no footer card">
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
                    <div className={bodyText ? styles.body : styles.hidden} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    <div className={body && !bodyText ? styles.image_container : styles.hidden}>
                        <div className={styles.empty_body_image}></div>
                        <h2 style={{margin: '0', padding: '0', fontSize: '20px'}}>No new tasks</h2>
                        <p style={{marginTop: '10px', padding: '0', fontSize: '14px'}}>Nothing needs your attention right now. Check back later.</p>
                    </div>
                    <hr className={footer && bodyText ? styles.line : styles.hidden}/>
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
                    <div className={body && bodyText ? styles.body : styles.hidden} style={{paddingLeft: padding[bodyPadding]}}>
                        <p className={styles.body_text}>{bodyText}</p>
                    </div>
                    <div className={body && !bodyText ? styles.image_container : styles.hidden}>
                        <div className={styles.empty_body_image}></div>
                        <h2 style={{margin: '0', padding: '0', fontSize: '20px'}}>No new tasks</h2>
                        <p style={{marginTop: '10px', padding: '0', fontSize: '14px'}}>Nothing needs your attention right now. Check back later.</p>
                    </div>
                    <hr className={footer && bodyText && header ? styles.line : styles.hidden}/>
                    <footer>
                        <div className={footer && bodyText ? styles.footer : styles.hidden}>
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
    bodyPadding: PropTypes.oneOf(['noPadding', 'normalPadding']),
    bodyText: PropTypes.string,
    loading: PropTypes.bool
}