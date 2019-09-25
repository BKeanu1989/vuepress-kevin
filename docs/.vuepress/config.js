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
        ],
        smoothScroll: true,
        sidebar: [
            {
                title: 'Group 1',   // required
                path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ]
            }
        ]
    }
}