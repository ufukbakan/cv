import { init } from 'jjsx';
import { clientRender } from '../infra/render';
import './style.sass';
init();

declare global {
    interface HTMLAnchorElement {
        _isHandled: boolean;
    }
}

window.addEventListener("load", () => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>("a");
    anchors.forEach((anchor) => {
        const targetUrl = new URL(anchor.href);
        if(targetUrl.pathname === location.pathname) return;
        if(anchor.href.startsWith("#")) return;
        if (anchor._isHandled) return;
        anchor.addEventListener("click", (event) => {
            if(targetUrl.origin !== location.origin || anchor.download) return;
            event.preventDefault();
            clientRender(targetUrl.pathname);
        });
        anchor._isHandled = true;
    });
})
clientRender(location.pathname, '/cv/');