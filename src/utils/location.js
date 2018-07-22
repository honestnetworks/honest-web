export const checkIfHomePage = (path) => {
    return Boolean(path && path.includes('/dashboard'));
};