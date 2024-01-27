export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of the blog'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image'
        },
        {
            name: 'smallDescription',
            title: 'Small Description',
            type: 'text'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
               {
                    type: 'block'
               },
            ],
        },
    ],
}