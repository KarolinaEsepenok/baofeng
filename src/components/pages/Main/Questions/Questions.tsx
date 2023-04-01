import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './Questions.module.scss'

export const Questions= ()=> {
    return (
        <div id={'aboutUs'} className={s.questionsContainer}>Вопросы
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Доставка</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Cпособы доставки
                        Доставка курьером по Беларуси от 9.00 руб.
                        Доставка по Минску 7 рублей, осуществляется в день заказа или на следующий день.
                        Доставка почтой [ в том числе курьерская скоростная доставка EMS] на следующий день
                        Рассчитать стоимость отправки:
                        1.Мелкий пакет  от 4.0р
                        http://tarifikator.belpost.by/forms/internal/small.php
                        2.Посылка  от 6.0р
                        http://tarifikator.belpost.by/forms/internal/parcel.php
                        3.Курьер EMS  от 8.0р
                        http://tarifikator.belpost.by/forms/internal/ems.php

                        Самовывоз в Минске (предупредить за час). Бесплатно.
                        Обязательно заблаговременно предупредить о своём намерении приехать, согласовать адрес и время.
                        Транспортная компания: самовывоз
                        Мы сотрудничаем с http://evropochta.by «Европочта» - это быстроразвивающийся  почтовый сервис, который занимается доставкой посылок по всей Беларуси!
                        Комиссия за денежный перевод при получении 1,5% от суммы заказа, на белпочте, к примеру, 3%
                        https://evropochta.by/about/offices/

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Возврат и гарантия</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Информация для покупателя</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Индивидуальный предприниматель Семёнов Александр Борисович
                        г. Минск, ул. Козлова, д. 29а
                        Дата регистрации в Торговом реестре/Реестре бытовых услуг: Не подлежит занесению в реестр
                        Номер в Торговом реестре/Реестре бытовых услуг: Не подлежит занесению в реестр, Республика Беларусь
                        УНП: 192194196
                        Регистрационный орган: Минский горисполком
                        Дата регистрации компании: 15.01.2014
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}