import React from 'react'
import styles from './Experiences.module.scss'
import Timeline from './ExperiencesTimelineItem'
import Title from './Title'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className={`hero ${styles.wrapper} has-text-centered`}>
                <Title title="Experiences" color='#2c3e50'/>
                <div className={styles.container}>
                    <Timeline side="left" time="Jun - Dec 2016" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Hedon Electronica Development</h4>
                        <p>
                            <i className="position">Flexwerker</i><br/>
                            Production and testing of products
                        </p>
                    </Timeline>
                </div>
            </section>
        )
    }
}