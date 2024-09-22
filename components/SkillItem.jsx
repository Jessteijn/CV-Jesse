import Image from 'next/image';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './SkillItem.module.scss';

export default class SkillItem extends React.Component {
    render() {
        let { img, color, value } = this.props;
        return (
            <div className="column is-2-desktop has-text-centered">
                <div className={styles.container}>
                    <div className={styles.progressBarContainer}>
                        <CircularProgressbar
                            value={value}
                            styles={buildStyles({
                                pathColor: color,
                                trailColor: '#d6d6d6',
                            })}
                        />
                        <div className={styles.imageContainer}>
                            <Image src={img} width="60" height="60" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}