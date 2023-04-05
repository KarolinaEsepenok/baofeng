import React from 'react'

import { useNavigate } from 'react-router-dom'

import s from './Error404.module.scss'

import error404 from '../../../assets/img/error404.svg'

export const Error404 = () => {
    const navigate = useNavigate()
    const openHomePage = () => {
        navigate('/')
    }

    return (
        <div className={s.errorContainer}>
            <div className={s.errorInfo}>
                <p>УПС!</p>
                <p className={s.descrError}>Извините, страница не найдена</p>
                <button className={s.btnBack}  onClick={openHomePage}>
                    Назад
                </button>
            </div>
            <img className={s.error404Img} src={error404} alt={'404'} />
        </div>
    )
}
