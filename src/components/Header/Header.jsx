import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import {ReactComponent as ThemeChanger} from '../../assets/icons/theme_changer.svg'
import { setTheme } from '../../redux/weatherSlice'
import s from './Header.module.scss'
function Header() {
    const theme = useSelector(state => state.weather.theme);
    const dispatch = useDispatch()
    const selectStyles = {
        control: (styles) => ({...styles, width: '194px',height: '37px',
         backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)', borderRadius: 10}),
        placeholder: (styles) => ({ ...styles, fontSize: '16px',fontWeight: 500,
         alignItems: 'center',color: theme === 'dark' ? '#fff' : '#000'}),
         option: (styles) => ({...styles, backgroundColor: theme === 'dark' ? '#4F4F4F' 
         : 'rgba(71, 147, 255, 0.2)'})
        };
        


    function changeTheme() {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    }
    useEffect(() => {
        const root = document.querySelector(':root');
        const vars = ['body-background', 'components-background','card-background', 'card-shadow', 'text-color'];
        vars.forEach(el => {
            root.style.setProperty(`--${el}-default`, `var(--${el}-${theme})`);
        })
    }, [theme])
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Logo className={s.logo} />
                <h1 className={s.logo__title}>React weather</h1>
            </div>
            <div className={s.wrapper}>
                <ThemeChanger onClick={changeTheme} className={s.theme_changer} />
                <Select placeholder="Выбрать город" styles={selectStyles} className={s.select} />
            </div>
        </header>
    )
}

export default Header
