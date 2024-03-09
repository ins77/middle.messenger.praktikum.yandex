import Handlebars from "handlebars";
import './registration-page.scss';
export { default as RegistrationPage } from './registration-page.hbs?raw';

Handlebars.registerHelper('registration-page-inputs', () => {
    return [
        { title: 'Почта', name: 'email' },
        { title: 'Логин', name: 'login' },
        { title: 'Имя', name: 'first_name' },
        { title: 'Фамилия', name: 'second_name' },
        { title: 'Телефон', name: 'phone' },
        { title: 'Пароль', name: 'password', type: 'password' },
        { title: 'Пароль (еще раз)', name: 'password', type: 'password' },
    ]
});
