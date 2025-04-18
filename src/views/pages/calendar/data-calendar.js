const categories = [
    {
        name: 'Danger',
        value: 'bg-danger'
    },
    {
        name: 'Success',
        value: 'bg-success'
    },
    {
        name: 'Primary',
        value: 'bg-primary'
    },
    {
        name: 'Info',
        value: 'bg-info'
    },
    {
        name: 'Dark',
        value: 'bg-dark'
    },
    {
        name: 'Warning',
        value: 'bg-warning'
    },
];

const calendarEvents = [
    {
        id: 11,
        title: 'All Day Event',
        start: new Date().setDate(new Date().getDate() + 2),
        className: 'bg-warning text-white',
    },
    {
        id: 12,
        title: 'Long Event',
        start: new Date().setDate(new Date().getDate() - 5),
        end: new Date().setDate(new Date().getDate() - 3),
        className: 'bg-success text-white',
    },
    {
        id: 13,
        title: 'Lunch',
        start: new Date().setDate(new Date().getDate() + 2),
        className: 'bg-info text-white',
    },
    {
        id: 14,
        title: 'Birthday Party',
        start: new Date().setDate(new Date().getDate() + 4),
        className: 'bg-primary text-white'
    }
];

export { categories, calendarEvents };
