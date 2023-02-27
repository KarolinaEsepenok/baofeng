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
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export type CatalogItemsPropsType={
    img:string
    nameItem:string
    price:string
    descriptionItem:string

}

const CatalogItems = (props:CatalogItemsPropsType) => {
    const [expanded, setExpanded] = React.useState(false);
    const [modalSuccess, setModalSuccess] = useState(false)


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const isOpenModal = () => {
        setModalSuccess(true);
    };
    const handleCloseModal = () => {
        setModalSuccess(false)


    }
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
              <CardContent >
                 <div className={s.priceBtn}>
                 <Typography variant="body2" color="text.secondary" className={s.price}>{props.price}
                    </Typography>
                 <button onClick={isOpenModal} className={s.btn}>Заказать</button> </div>
                  {modalSuccess && <Modal handleCloseModal={handleCloseModal}
                                          title={'Заказ'}
                                          value={'Введите, пожалуйста, для заказа свой номер телефона. Наш специалист свяжется с Вами.'}>
                      <div><input type={'tel'}/></div>
                      <div className={s.buttons}>
                          <button className={s.button} onClick={handleCloseModal}>Close</button>
                      </div>
                  </Modal>}
                </CardContent>

                <CardActions className={s.itemName} disableSpacing>
                    <div>{props.nameItem}</div>
                    <ExpandMore className={s.arrow}
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent >
                        <Typography className={s.itemDescr} paragraph>{props.descriptionItem}</Typography>

                    </CardContent>
                </Collapse>
                </div>
            </div>
        </div>
    );
};

export default CatalogItems;