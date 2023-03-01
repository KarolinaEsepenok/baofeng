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

const CatalogItems = (props: CatalogItemsPropsType) => {
    const [expanded, setExpanded] = React.useState(false);
    const [modalSuccess, setModalSuccess] = useState(false)
    const [modalItem, setModalItem] = useState(false)


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const isOpenModal = () => {
        const noScroll = require('no-scroll');
        setModalSuccess(true);
        noScroll.on()
    };
    const handleCloseModal = () => {
        const noScroll = require('no-scroll');
        setModalSuccess(false)
        noScroll.off()
    }
    const isOpenItem = () => {
        setModalItem(true);
    };
    return (
        <div className={s.catalogItem}>
            <div className={s.item}>
                <CardMedia onClick={isOpenItem}
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
                            {modalSuccess && <Modal handleCloseModal={handleCloseModal}
                                                    title={'Заказ'}
                                                    value={'Наш специалист свяжется с Вами.'}>
                                <div className={s.inputPhoneContainer}>
                                    <form>
                                        <label className={s.labelPhone} htmlFor="phone">Введите свой номер
                                            телефона:</label>
                                        <input placeholder={'+XXXXX-XXX-XX-XX'} className={s.inputPhone} required type="tel" id="phone" name="phone"
                                               pattern='\s{0,}\+{1,1}375\s{0,}\({0,1}(([2]{1}([5]{1}[9]{1}))([3]{1}[3]{1})([4]{1}[4]{1}))\)\s{0,}[0-9]{3,3}\s{0,}[0-9]{4,4}'/>
                                        <div className={s.buttons}>
                                            <button className={s.button} onClick={handleCloseModal}>Закрыть</button>
                                            <button type={'submit'} className={s.inputPhoneBtn}>Заказать</button>
                                        </div>
                                    </form>
                                </div>


                            </Modal>}</div>
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