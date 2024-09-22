import React from 'react'
import styles from './EducationItem.module.scss'

export default class EducationItem extends React.Component {
    render() {
        let { color, name, time, gpa, major } = this.props
        return (
            <div className={`columns ${styles.wrapper}`}>
                <div className={`column ${styles.item} is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile`} style={{ borderLeftColor: color }}>
                    <div className="columns">
                        <div className={`column is-9 has-text-left ${styles.school}`}>
                            <p>{time}</p>  
                            <h4 className={styles.name}>
                                {name}
                            </h4>
                            { major && <i>Major: {major}</i> }
                        </div>
                        <div className="column is-3 has-text-right gpa">
                            <p>GPA</p>
                            <h4>{gpa}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}