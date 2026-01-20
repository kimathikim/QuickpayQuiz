export const formatCurrency = (amount: number) => {
    const formatted = amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const parts = formatted.split('.');
    return {
        integer: parts[0],
        fraction: parts[1] || '00',
        full: formatted
    };
};

export const formatDate = (date: string | number | Date) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Invalid Date';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
