export default {
    name: 'Contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'fistname',
        title: 'First name',
        type: 'string',
      },
      {
        name: 'lastname',
        title: 'Last name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },

      {
        name: 'product',
        title: 'Choose your product',
        type: 'string',
        options: {
          list: [ 
            { title: 'Proflo-u max', value: 'Proflo-u max'},
            { title: 'Proflo-u pro', value: 'Proflo-u pro' },
            { title: 'catridge', value: 'catridge' },
            { title: 'other', value: 'other' },
          ]
        }
      },

      {
        name: 'querries',
        title: 'Querries',
        type: 'text',
      },
      

    ],
  }
  