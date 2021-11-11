import React from 'react';
import SvgSelector from '../SvgSelector/SvgSelector';
import s from './Days.module.scss';

function Card() {
    const days = [
        {
          day: 'Сегодня',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Завтра',
          day_info: '29 авг',
          icon_id: 'small rain sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь и солнце',
        },
        {
          day: 'Ср',
          day_info: '30 авг',
          icon_id: 'small rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь',
        },
        {
          day: 'Чт',
          day_info: '28 авг',
          icon_id: 'mainly cloudy',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Пт',
          day_info: '28 авг',
          icon_id: 'rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Сб',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Вс',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
      ];
    return (
        <div className={s.cards}>
            {
                days.map(el => (
                    <div key={el.day_info} className={s.card}>
                        <div className={s.card__day}>{el.day}</div>
                        <div className={s.card__day_info}>{el.day_info}</div>
                        <SvgSelector id={el.icon_id} />
                        <div className={s.card__temp_day}>{el.temp_day}</div>
                        <div className={s.card__temp_night}>{el.temp_night}</div>
                        <div className={s.card__info}>{el.info}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
