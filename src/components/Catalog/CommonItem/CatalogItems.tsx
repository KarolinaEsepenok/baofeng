import React, {useState} from 'react';

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
    name? : string


}

const CatalogItems = (props: CatalogItemsPropsType) => {
    const [expanded, setExpanded] = React.useState(false);
    const [modal, setModal] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [modalError, setModalError] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const TOKEN = "6220759086:AAGG4rUAJetNvJl4frhmaQLNOuJNCn_1w-4";
    const CHAT_ID = "-1001765030414";



    const handleSubmit = (values: { name: string, phone: number }, resetForm: any) => {
        setIsloading(true)
        let message = `Заявка с сайта!\n`;
        message += `Отравитель: ${values.name}\n`;
        message += `Номер телефона: ${values.phone}`;
        console.log(message)

        axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_made: 'HTML',
            text: message,
            //name: values.name,
           // phone: values.phone,

        })
            .then(() => {
                setModalSuccess(true)

                resetForm()
            })
            .catch(() => {
                alert('ОШИБКА')
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
    const handleSuccess = () => {
        setModalSuccess(true)
    }
    const handleError = () => {
        setModalError(true)
    }


    const formik = useFormik({
        initialValues: {
            name: '', phone: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.phone) {
                errors.phone = 'Введите номер телефона'
            } else if (!/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(values.phone)) {
                errors.phone = 'Неправильный формат'
            }
            if (!values.name) {
                return {
                    name: 'Пожалуйста, введите своё имя'
                }
            }

            return errors
        }, onSubmit: (values, {resetForm}) => {
            // @ts-ignore
            // @ts-ignore
            handleSubmit(values, resetForm)

        },
    });


    {/* const isOpenItem = () => {
        setModal(true);
    };*/
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={s.catalogItem}>
            <div className={s.item}>
                <CardMedia className={s.img}
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
                                        <label className={s.labelPhone} htmlFor="name">Вaше имя:</label>
                                        <input disabled={isLoading} autoFocus={true}
                                               className={s.inputPhone}
                                               required type="text" id="name"
                                               {...formik.getFieldProps("name")}/>
                                        {formik.errors.name ? <div className={s.inputError}>{formik.errors.name}</div> : <div className={s.cont}></div>}
                                        <label className={s.labelPhone} htmlFor="phone">Введите свой номер
                                            телефона:</label>
                                        <input disabled={isLoading}
                                               placeholder={'+375'}
                                               className={s.inputPhone}
                                               required type="tel" id="phone"
                                               {...formik.getFieldProps("phone")} />
                                        {formik.errors.phone ? <div className={s.inputError}>{formik.errors.phone}</div> : <div className={s.cont}></div>}
                                        <div className={s.buttons}>
                                            <button className={s.button} onClick={handleCloseModal}>Назад</button>
                                            <button disabled={!!formik.errors.phone || !! formik.errors.name}
                                             type={'submit'} className={s.inputPhoneBtn}
                                                    onClick={handleSuccess}>Заказать
                                            </button>
                                        </div>
                                    </form>
                                </div>


                            </Modal>}
                            {modalSuccess && <Modal handleCloseModal={handleCloseModal}
                                                    title={'Благодарим за заказ!'}
                                                    value={'Ваш номер успешно отправлен!'}>
                                <div className={s.buttons}>
                                    <button className={s.button} onClick={handleCloseModal}>Назад</button>
                                </div>
                            </Modal>}{modalError &&<Modal handleCloseModal={handleCloseModal}
                                             title={'Щшибка!'}
                                             value={'Ваш номер успешно отправлен!'}>
                                <div className={s.buttons}>
                                    <button className={s.button} onClick={handleCloseModal}>Назад</button>
                                </div>
                            </Modal>}
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