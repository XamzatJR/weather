import React from 'react';
import SvgSelector from '../SvgSelector/SvgSelector';
import s from './TodayInfo.module.scss';
import cloud from '../../assets/img/Cloud_image.png'
function TodayInfo() {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];
    return (
        <section className={s.today_info}>
            {
                items.map(el => (
                    <div key={el.icon_id} className={s.today_info__item}>
                        <div className={s.today_info__item__logo}><SvgSelector id={el.icon_id} /></div>
                        <div className={s.today_info__item__name}>{el.name}</div>
                        <div className={s.today_info__item__value}>{el.value}</div>
                    </div>
                ))
            }
            <img className={s.today_info__img} src={cloud} alt="Cloud" />
        </section>
    )
}

export default TodayInfo
