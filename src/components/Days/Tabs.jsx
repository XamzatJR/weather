import React from 'react'
import s from './Days.module.scss';
function Tabs() {
    const tabs = [
        {
          value: 'На неделю',
        },
        {
          value: 'На 10 дней',
        },
        {
          value: 'На месяц',
        },
      ];
    return (
      <div className={s.tabs}>
        <div className={s.btns}>
            {tabs.map(el => (
              <button className={s.btn}>{el.value}</button>
            ))}
        </div>
        <button className={s.btn}>Отменить</button>
      </div>
    )
}

export default Tabs
