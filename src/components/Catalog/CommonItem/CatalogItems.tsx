import React, {useEffect, useState} from 'react';

import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import s from "./CatalogItems.module.scss"
import {styled} from "@mui/material/styles";
import {Modal} from '../../common/Modal/Modal';
import {useFormik} from "formik";
import axios from "axios";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export type CatalogItemsPropsType = {
    img: string
    nameItem: string
    price: string
    descriptionItem: string

}

interface FormikErrorType {
    phone?: string

}

const CatalogItems = (props: CatalogItemsPropsType) => {
    const [expanded, setExpanded] = React.useState(false);
    const [modal, setModal] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [isLoading, setIsloading] = useState(false)

const handleSubmit = (values:{name:string,phone:number}, resetForm:any)=>{
    setIsloading(true)
    axios.post("https://back-portfolio-neon.vercel.app/", {
        name: values.name,
        phone: values.phone,

    })
        .then(() => {
            setModalSuccess(true)
           resetForm()
        })
        .catch(() => {
            alert("Something went wrong... Please try again.")
        })
        .finally(() => {
            setIsloading(false)
        })
}
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const isOpenModal = () => {
        const noScroll = require('no-scroll');
        setModal(true);
        noScroll.on()
    };
    const handleCloseModal = () => {
        const noScroll = require('no-scroll');
        setModal(false)
        setModalSuccess(false)
        noScroll.off()
    }
    const handleSuccess= () => {
        setModalSuccess(true)
    }

    const formik = useFormik({
        initialValues: {
            name: '', phone: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.phone) {
                errors.phone = 'Phone is required'
            } else if (errors.phone) {
                errors.phone = 'Invalid phone'
            }
            if (!values.name) {
                return {
                    name: 'Please, enter your name'
                }
            }
            return errors
        },onSubmit: (values, {resetForm}) => {
          // @ts-ignore
            // @ts-ignore
            handleSubmit(values,resetForm)

        },
    });


    {/* const isOpenItem = () => {
        setModal(true);
    };*/}
    return (
        <div className={s.catalogItem}>
            <div className={s.item}>
                <CardMedia
                           component="img"
                           height="194"
                           image={props.img}
                           alt="Paella dish"
                />
                <div className={s.itemNameDescr}>
                    <CardContent>
                        <div className={s.priceBtnContainer}>
                            <div className={s.priceBtn}>
                                <Typography variant="body2" color="text.secondary" className={s.price}>{props.price}
                                </Typography>
                                <button onClick={isOpenModal} className={s.btn}>Купить</button>
                            </div>
                            {modal && <Modal handleCloseModal={handleCloseModal}
                                                    title={'Заказ'}
                                                    value={''}>
                                <div className={s.inputPhoneContainer}>
                                    <form id={'telegram'} onSubmit={formik.handleSubmit}>

                                        <label className={s.labelPhone} htmlFor="phone">Вaше имя:</label>
                                        <input disabled={isLoading} placeholder={'Имя'} className={formik.errors.name?`${s.inputError}  ${s.inputPhone}`:`${s.inputPhone}`} required type="text" id="name"
                                               {...formik.getFieldProps("name")}/>
                                        <label className={s.labelPhone} htmlFor="phone">Введите свой номер
                                            телефона:</label>
                                        <input disabled={isLoading} placeholder={'+XXXXX-XXX-XX-XX'} className={formik.errors.name?`${s.inputError}  ${s.inputPhone}`:`${s.inputPhone}`} required type="tel" id="phone"
                                               {...formik.getFieldProps("phone")} />

                                        <div className={s.buttons}>
                                            <button className={s.button} onClick={handleCloseModal}>Назад</button>
                                            <button disabled={
                                                !!formik.errors.name || !!formik.errors.phone
                                            } type={'submit'} className={s.inputPhoneBtn} onClick={handleSuccess}>Заказать</button>
                                        </div>
                                    </form>
                                </div>


                            </Modal>}
                            {modalSuccess && <Modal handleCloseModal={handleCloseModal}
                                                    title={'Благодарим за заказ!'}
                                                    value={'Ваш номер успешно отправлен!'}>
                                <div className={s.buttons}>
                                    <button className={s.button} onClick={handleCloseModal}>Назад</button>
                                </div></Modal>}
                            </div>
                    </CardContent>

                    <CardActions className={s.itemName} disableSpacing>
                        <div>{props.nameItem}</div>
                        <ExpandMore className={s.arrow}
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography className={s.itemDescr} paragraph>{props.descriptionItem}</Typography>

                        </CardContent>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default CatalogItems;