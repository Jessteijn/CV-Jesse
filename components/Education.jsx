import React from 'react'
import styles from './Education.module.scss'
import Item from './EducationItem'
import Title from './Title'

export default class Education extends React.Component {
    render() {
        return (
            <div className={styles.wrapper} id='Education'>
                <section className="hero has-text-centered">
                    <Title title="Education" color='#ffffff'/>
                    <div className="container">
                        <Item 
                            time="2014 - 2017 (B.Sc.)"
                            name="King Mongkut's Institute of Technology Ladkrabang (KMITL)"
                            major="Computer Science"
                            gpa="?"
                            color="#2ecc71"
                        />
                        <Item 
                            time="2008 - 2013 (High School)"
                            name="Phanatpitayakarn School"
                            gpa="?"
                            color="#3498db"
                        />
                    </div>
                </section>
            </div>
        )
    }
}