import Handlebars from "handlebars";

import './profile-data-change-page.scss';
export { default as ProfileDataChangePage } from './profile-data-change-page.hbs?raw';

Handlebars.registerHelper('profile-page-inputs', () => {
    return [
        { name: 'email', type: 'email', placeholder: 'suhinin.dm@yandex.ru', label: 'Почта' },
        { name: 'login', type: 'text', placeholder: 'dima1234', label: 'Логин' },
        { name: 'first_name', type: 'text', placeholder: 'Дмитрий', label: 'Имя' },
        { name: 'second_name', type: 'text', placeholder: 'Сухинин', label: 'Фамилия' },
        { name: 'display_name', type: 'text', placeholder: 'Дима', label: 'Имя в чате' },
        { name: 'phone', type: 'phone', placeholder: '+7 (999) 888-77-66', label: 'Телефон' },
    ]
});
