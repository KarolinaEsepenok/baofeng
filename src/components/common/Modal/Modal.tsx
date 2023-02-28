
import React, {ReactNode, useEffect} from 'react'
import closeBtn from '../../../assets/img/closeBtn.svg'
import s from './Modal.module.scss'


type ModalType = {
    children: ReactNode
    title: string
    value: string
    handleCloseModal:()=>void

}

export const Modal: React.FC<ModalType> = ({children,title, value, handleCloseModal}) => {

    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                handleCloseModal()
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    return (
        <>
            <div className={s.modal}>
                <div onClick={e => e.stopPropagation()} className={s.content}>
                    <div className={s.close}>
                        <img src={closeBtn} onClick={handleCloseModal} alt="closeButton"/>
                    </div>

                    <div className={s.titleContainer}>
                        <h2 className={s.title}>{title}</h2>
                    </div>
                    <div className={s.subtitleContainer}>
                        <p className={s.subtitle}>{value}</p>
                    </div>
                    {children}

                </div>
            </div>
        </>
    )
}