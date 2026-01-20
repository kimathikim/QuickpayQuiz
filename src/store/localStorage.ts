export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('quickpay_dashboard_state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('quickpay_dashboard_state', serializedState);
    } catch {
    }
};
