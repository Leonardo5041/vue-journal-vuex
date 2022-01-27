export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor xD'
        },
        {
            id: new Date().getTime() + 10,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor lol'
        },
        {
            id: new Date().getTime() + 20,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor :p'
        },

    ]
})