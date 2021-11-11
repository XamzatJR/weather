import React from 'react'
import Tabs from './Tabs';
import s from './Days.module.scss';
import Card from './Card';

function Days() {

    return (
        <section className={s.days}>
            <Tabs />
            <Card />
        </section>
    )
}

export default Days
