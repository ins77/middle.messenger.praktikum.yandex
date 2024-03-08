import Handlebars from 'handlebars';
import './style.scss';
import * as Components from './components';
import * as Pages from './pages';

enum EPages {
    LOGIN = 'login',
    REGISTRATION = 'registration',
    PROFILE = 'profile',
    PROFILE_DATA_CHANGE = 'profile-data-change',
    PROFILE_PASSWORD_CHANGE = 'profile-password-change',
    MESSENGER = 'messenger',
    NOT_FOUND = 'not-found',
    SERVER_ERROR = 'server-error',
}

const pages: Record<string, any> = {
    [EPages.LOGIN]: [ Pages.LoginPage ],
    [EPages.REGISTRATION]: [ Pages.RegistrationPage ],
    [EPages.PROFILE]: [ Pages.ProfilePage ],
    [EPages.PROFILE_DATA_CHANGE]: [ Pages.ProfileDataChangePage ],
    [EPages.PROFILE_PASSWORD_CHANGE]: [ Pages.ProfilePasswordChangePage ],
    [EPages.MESSENGER]: [ Pages.MessengerPage ],
    [EPages.NOT_FOUND]: [ Pages.NotFoundPage ],
    [EPages.SERVER_ERROR]: [ Pages.ServerErrorPage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);
});

function navigate(page: EPages) {
    const [ source, args ] = pages[page];
    const handlebars = Handlebars.compile(source);
    document.body.innerHTML = handlebars(args);
}

document.addEventListener('DOMContentLoaded', () => {
    const locationHash = window.location.hash.slice(1);

    if (locationHash && !pages[locationHash]) {
        navigate(EPages.NOT_FOUND);
        return;
    }

    navigate(locationHash as EPages || EPages.MESSENGER);
});

document.addEventListener('click', (event: MouseEvent) => {
    const target = (event.target as any) || {};
    const { page, url } = target.dataset;
    const isMainPage = ['', '/'].includes(url);

    if (!page) {
        return;
    }

    navigate(page as EPages);

    if (url) {
        const newUrl = isMainPage ? url : `#${url}`;

        window.history.pushState("", "", newUrl);
    }
});