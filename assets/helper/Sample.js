const Types = {
    YEAR: 'yearly',
    MONTH: 'monthly',
    WEEK: 'weekly',
    DAY: 'daily',
}

Object.freeze(Types);

export const Sample = {
    Title: "Title Of the Timeline",
    Description: "Description of the Timeline",
    Type: Types.YEAR,
    Data: [
        {
            Date: "2020-01-01",
            Time: "00:00",
            Details: "Details of the event",
        }
    ]
}