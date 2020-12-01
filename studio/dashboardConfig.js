export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc6d49f7462ce82bb6902b2',
                  title: 'Sanity Studio',
                  name: 'websu-website-studio',
                  apiId: '0f96465b-40f8-41b4-9442-043e60eb65a4'
                },
                {
                  buildHookId: '5fc6d49f7462ce90a568f732',
                  title: 'Blog Website',
                  name: 'websu-website',
                  apiId: '111c2da6-c454-4053-9929-1e5a99db85d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samos123/websu-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://websu-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
