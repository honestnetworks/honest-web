export const checkIfDashboardPage = (path) => {
    return Boolean(path && (path.includes('/dashboard') || path.includes('/details')));
};