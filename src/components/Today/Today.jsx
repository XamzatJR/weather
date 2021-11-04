import React from 'react'
import SvgSelector from '../SvgSelector/SvgSelector'
import s from './Today.module.scss'

function Today() {
    return (
        <section className={s.today}>
            <div className={s.today__top_block}>
                <div>
                <div className={s.today__temp}>20°</div>
                <div className={s.today__day}>Сегодня</div>
                </div>
                <SvgSelector id="sun" />
            </div>
            <div className={s.today__bottom_block}>
                <div className={s.today__time}>Время: <span>21:54</span></div>
                <div className={s.today__city}>Город: <span>Санкт-Петербург</span></div>
            </div>
        </section>
    )
}

export default Today
