export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d07a90827efd0017f1cebdb',
                  title: 'Sanity Studio',
                  name: 'mrkitsune-studio',
                  apiId: 'c5a920c1-d566-4c99-998c-439f8460b97e'
                },
                {
                  buildHookId: '5d07a908672b450186f1c6f9',
                  title: 'Portfolio Website',
                  name: 'mrkitsune',
                  apiId: '12ad800e-90f4-45f4-93fe-e1e625580d4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smugfox/mrkitsune',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mrkitsune.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
