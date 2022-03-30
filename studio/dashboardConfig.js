export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62448bf3f1979300c8ff2afc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-1-studio-u14rz9q9',
                  apiId: '2cdc1f1e-dacd-48ff-b753-87df8b5254ab'
                },
                {
                  buildHookId: '62448bf37050eb00620a0571',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-1-web-xj797hcj',
                  apiId: 'e56ebadf-ab53-4bde-8ef3-e30dbd1f38a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bline/sanity-nextjs-landing-pages1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-1-web-xj797hcj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
