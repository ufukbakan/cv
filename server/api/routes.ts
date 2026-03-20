import getContributions from "./contributions";

const APIRoutes : Record<string, (path: string, req: any) => Promise<any>> = {
    '/api/contributions': getContributions
};

export default APIRoutes;
