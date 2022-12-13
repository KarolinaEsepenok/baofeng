import React from 'react';
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import bf888ЫЫ from "../../img/bf888ЫЫ.jpg"
import s from "./CatalogItems.module.scss"
import {styled} from "@mui/material/styles";

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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={s.catalogItem}>

            <div className={s.item}>
                <CardMedia
                    component="img"
                    height="194"
                    image={props.img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{props.price}
                    </Typography>
                </CardContent>
                <CardActions className={s.itemName} disableSpacing>
                    <div>{props.nameItem}</div>
                    <ExpandMore
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
    );
};

export default CatalogItems;