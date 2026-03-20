import NotFound from "../src/pages/NotFound";
import Home from "../src/pages/Home";

export const routes : Record<string, FunctionComponent<any>> = {
    '/': Home,
};

interface FunctionComponent<T = any> extends JSX.FunctionComponent<T> {
    ssp?: string;
    defaultProps?: T;
}

export function getPageComponent(path: string): FunctionComponent<any> {
    return routes[path] || NotFound; // partial match logic can be added here
}