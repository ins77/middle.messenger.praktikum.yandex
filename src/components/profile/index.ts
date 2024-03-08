import Handlebars from "handlebars";

import './profile.scss';
export { default as Profile } from './profile.hbs?raw';

Handlebars.registerHelper('profile-page-inputs', () => {
    return [
        { name: 'email', type: 'email', placeholder: 'pochta@yandex.ru', label: 'Почта' },
        { name: 'login', type: 'text', placeholder: 'ivanivanov', label: 'Логин' },
        { name: 'name', type: 'text', placeholder: 'Иван', label: 'Имя' },
        { name: 'lastname', type: 'text', placeholder: 'Иванов', label: 'Фамилия' },
        { name: 'nickname', type: 'text', placeholder: 'Иван', label: 'Имя в чате' },
        { name: 'phone', type: 'phone', placeholder: '+7 (999) 888-77-66', label: 'Телефон' },
    ]
});
