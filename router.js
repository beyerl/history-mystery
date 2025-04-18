const routes = {
    '/': '<game-page></game-page>',
};

function updateView() {
    const path = window.location.hash.slice(1) || '/';
    const routerView = document.querySelector('router-view');
    routerView.innerHTML = routes[path] || '<div><h2>404</h2><p>Page not found.</p></div>';
}

window.addEventListener('hashchange', updateView);
window.addEventListener('load', updateView);
