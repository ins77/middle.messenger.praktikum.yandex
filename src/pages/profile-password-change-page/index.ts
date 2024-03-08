import Handlebars from "handlebars";

import './profile-password-change-page.scss';
export { default as ProfilePasswordChangePage } from './profile-password-change-page.hbs?raw';

Handlebars.registerHelper('profile-password-change-page-inputs', () => {
    return [
        { name: 'oldPassword', type: 'password', label: 'Старый пароль' },
        { name: 'newPassword', type: 'password', label: 'Новый пароль' },
        { name: 'newPassword2', type: 'password', label: 'Повторите новый пароль' },
    ]
});
