import styles from './styles/grid.module.css'
export const Grid = ({one,two,three}) =>{
    if(one){
        return(
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    lorem ipsumVelit consequat proident sit ullamco consectetur occaecat eiusmod mollit occaecat adipisicing qui id proident. Sit magna velit commodo incididunt laboris consectetur id cillum sint aliqua incididunt mollit do qui. Cupidatat velit est ex reprehenderit aliqua ex do sint. Et id fugiat voluptate culpa aliqua ad eiusmod anim commodo laborum aliqua deserunt.
                </div>
                <div className={styles.row}>
                    Adipisicing ullamco quis nisi qui enim cillum ad cillum mollit commodo ad eiusmod nisi ex.
                </div>
                <div className={styles.row}>
                    lorem ipsumVelit consequat proident sit ullamco consectetur occaecat eiusmod mollit occaecat adipisicing qui id proident. Sit magna velit commodo incididunt laboris consectetur id cillum sint aliqua incididunt mollit do qui. Cupidatat velit est ex reprehenderit aliqua ex do sint. Et id fugiat voluptate culpa aliqua ad eiusmod anim commodo laborum aliqua deserunt.
                </div>
                <div className={styles.row}>
                    Adipisicing ullamco quis nisi qui enim cillum ad cillum mollit commodo ad eiusmod nisi ex.
                </div>
            </div>
        )
    }
    if(two){
        return(
            <div className={styles.wrapperTwo}>
                <div className={styles.row}>
                    Velit laboris exercitation exercitation minim cillum aliqua ea.
                </div>
                <div className={styles.row}>
                    Nulla reprehenderit ad enim ullamco enim occaecat magna et officia eu dolore id exercitation velit. Labore eu ullamco ad veniam incididunt. Labore in consequat mollit officia Lorem. Sit occaecat aliquip aliquip deserunt. Magna elit nulla in irure dolore pariatur.

Minim occaecat commodo aute dolor aliquip. Laborum culpa dolor nostrud magna excepteur cupidatat tempor sint enim est magna. Qui nostrud et ullamco aute commodo irure id do dolore. Occaecat labore exercitation reprehenderit velit ullamco in ea sint esse aliquip non velit minim. Esse exercitation consequat ea commodo laboris non aute labore. Ad eu eiusmod nisi qui.
                </div>
                <div className={styles.nested}>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                    <div>
                        Lorem
                    </div>
                </div>
                <div className={styles.row}>
                    Velit laboris exercitation exercitation minim cillum aliqua ea.
                </div>
                <div className={styles.row}>
                    Velit laboris exercitation exercitation minim cillum aliqua ea.
                </div>
                <div className={styles.row}>
                    Velit laboris exercitation exercitation minim cillum aliqua ea.
                </div>
                <div className={styles.row}>
                    Velit laboris exercitation exercitation minim cillum aliqua ea.
                </div>
            </div>
        )
    }
    if(three){
        return(
            <div className={styles.wrapperThree}>
                <div className={styles.box1}>Box 1</div>
                <div className={styles.box2}>Box 2</div>
                <div className={styles.box3}>Box 3</div>
                <div className={styles.box4}>Box 4</div>
            </div>
        )
    }
}