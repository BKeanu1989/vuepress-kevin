module.exports = {
    title: 'Kevin Fechner',
    description: 'Interesting and not interesting things from Kevin Fechner',
    configureWebpack: {
        resolve: {
            alias: {
            '@alias': 'path/to/some/dir'
            }
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }
        ]
    }
}