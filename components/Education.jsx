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
                            time="2020 - Now (B.Sc.)"
                            name="TU Delft"
                            major="Electrical Engineering"
                            gpa="7.8"
                            color="#2ecc71"
                        />
                        <Item 
                            time="2014 - 2020 (High School)"
                            name="ISW Gasthuislaan"
                            gpa="7"
                            color="#3498db"
                        />
                    </div>
                </section>
            </div>
        )
    }
}