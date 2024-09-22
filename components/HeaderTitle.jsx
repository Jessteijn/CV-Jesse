import React from 'react';
import Typist from 'react-typist';
import styles from './HeaderTitle.module.scss';
const cursor = {
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
}

const HeaderTitle = ({color}) => (
    <div className={`is-hidden-touch ${styles.title}`} style={{color}}>
        <Typist cursor={cursor}>
            I&apos;m <span>Jesse</span>
        </Typist>
    </div> 
);

HeaderTitle.displayName = 'HeaderTitle';

export default HeaderTitle;