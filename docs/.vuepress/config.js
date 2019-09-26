module.exports = {
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
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'English', // this will be set as the lang attribute on <html>
            title: 'Kevin Fechner',
            description: 'Interesting and not interesting things from Kevin Fechner',
            selectText: 'Languages',
            // label for this locale in the language dropdown
            label: 'English',
            // Aria Label for locale in the dropdown
            ariaLabel: 'Languages'
        },
        '/de/': {
            lang: 'Deutsch',
            title: 'VuePress',
            description: 'Interessantes und uninteressantes von Kevin Fechner',
            selectText: 'Sprachen',
            // label for this locale in the language dropdown
            label: 'Deutsch',
            // Aria Label for locale in the dropdown
            ariaLabel: 'Sprachen'
        }
    }
}