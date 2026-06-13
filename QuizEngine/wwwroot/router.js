import { translationService } from './business-logic/translation-service.js';

const routes = {
    '/': '<start-page></start-page>',
    '/game': '<game-page></game-page>',
    '/setup': '<game-setup-page></game-setup-page>',
    '/join': '<join-game-page></join-game-page>',
    '/scores': '<game-scores-page></game-scores-page>',
    '/credits': '<credits-page></credits-page>',
    '/tutorial': '<tutorial-page></tutorial-page>',
};

function updateView() {
    const fullPath = window.location.hash.slice(1) || '/';
    const path = fullPath.split('?')[0]; // Extract the path without query parameters
    const routerView = document.querySelector('router-view');
    routerView.innerHTML = routes[path] || `<div><h2>404</h2><p>${translationService.t('common.pageNotFound')}</p></div>`;
}

// Wires hash routing and renders the current view. Called by main.js after the
// quiz config is set and the page custom elements are registered.
export function startRouter() {
    window.addEventListener('hashchange', updateView);
    updateView();
}
