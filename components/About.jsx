import Image from 'next/image'
import React from 'react'
import styles from './About.module.scss'
import Interersts from './AboutInterest'
import Title from './Title'

export default class About extends React.Component {
    render() {
        return (
            <section className={`hero ${styles.wrapper} has-text-centered`}>
                <Title title="About me" color='#ffffff'/>
                <div className="columns is-mobile">
                    <div className="column has-text-right-tablet has-text-center is-12-mobile is-6-desktop">
                        <dl>
                            <dt>FULL NAME</dt>
                            <dd>Jesse Wessteijn</dd>
                            <dt>EMAIL</dt>
                            <dd>jessteijn@hotmail.nl</dd>
                            <dt>MOBILE NO.</dt>
                            <dd>+31 6 17848853</dd>
                        </dl>
                    </div>
                    <div className="column has-text-left">
                            <Image src="/images/mascot.png" width={180} height={180} alt="Mascotte" className={styles.mascot} />
                    </div>
                </div>
                <div className="columns">
                    <div className={`column ${styles.detail} is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile`}>
                        Hello, my name is <b>Jesse Wessteijn</b>. 
                        And this is my personal website. I am a 22 year old student from the Netherlands.
                    </div>
                </div>
                <Interersts />
                </section>
        )
    }
}