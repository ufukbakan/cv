import { transpile } from "jjsx";
import { clearHydrations } from "./hydration";
import { getPageComponent } from "./router";
import ErrorPage from "../src/pages/ErrorPage";

export async function clientRender(path: string, basePath = "/") {
    const pathName = path.startsWith(basePath) ? path.slice(basePath.length - 1) : path;
    // Show loading indicator if only page takes more than 250ms to load
    const loaderTimer = setTimeout(() => {
        document.getElementById("loading-indicator")?.classList.remove("hide");
    }, 250);
    await clearHydrations();
    try {
        const PageComponent = getPageComponent(pathName);
        const props = PageComponent.ssp
            ? await fetch(PageComponent.ssp).then(res => res.json())
            : PageComponent.defaultProps || { pathName };
        const html = transpile(PageComponent(props));
        document.getElementById("app")!.innerHTML = html;
    } catch (error) {
        document.getElementById("app")!.innerHTML = transpile(
            ErrorPage({ error: error as Error })
        );
    } finally {
        clearTimeout(loaderTimer);
        if (path !== location.pathname) {
            history.pushState(null, "", path);
            window.dispatchEvent(new Event("load"));
        }
        document.getElementById("loading-indicator")?.classList.add("hide");
    }
}