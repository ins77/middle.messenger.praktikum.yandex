import Handlebars from 'handlebars';
import './messenger-page.scss';
export { default as MessengerPage } from './messenger-page.hbs?raw';

Handlebars.registerHelper('messenger-page-list', () => {
    return [
        { name: 'Опоссум', message: 'Изображение', unread: '2', date: '12 Апр 2020' },
        { name: 'Енот', message: 'Go на свалку!', date: 'Пн', current: true },
        { name: 'Барсук', message: 'А у кого ключи от сарая?', unread: '4', date: '15:20' },
    ]
});

Handlebars.registerHelper('messenger-page-feed', () => {
    return [
        { message: 'Класс!', time: '12:00', date: '06-03-2024', read: true, own: true  },
        { image: 'images/message-image-mock.png', time: '11:56', date: '06-03-2024' },
        {
            message:
                'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА ' +
                'в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. ' +
                'Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все ' +
                'тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой ' +
                'забрали только кассеты с пленкой\nХассельблад в итоге адаптировал SWC для космоса, ' +
                'но что-то пошло не так и на ракету они так никогда и не попали. Всего их было ' +
                'произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            time: '11:56',
            date: '06-03-2024'
        },
    ]
});