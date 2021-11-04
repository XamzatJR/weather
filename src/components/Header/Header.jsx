import React from 'react'
import Select from 'react-select'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import {ReactComponent as ThemeChanger} from '../../assets/icons/theme_changer.svg'
import s from './Header.module.scss'
function Header() {
    const selectStyles = {
        control: (styles) => ({...styles, width: '194px',height: '37px',
         backgroundColor: 'rgba(71, 147, 255, 0.2)', borderRadius: 10}),
        placeholder: (styles) => ({ ...styles, fontSize: '16px',fontWeight: 500,
         alignItems: 'center',color: '#000'})};
    
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Logo className={s.logo} />
                <h1 className={s.logo__title}>React weather</h1>
            </div>
            <div className={s.wrapper}>
                <ThemeChanger className={s.theme_changer} />
                <Select placeholder="Выбрать город" styles={selectStyles} className={s.select} />
            </div>
        </header>
    )
}

export default Header
