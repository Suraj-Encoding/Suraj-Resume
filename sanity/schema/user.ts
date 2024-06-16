// # User Schema #

import { defineField, defineType } from 'sanity';

// # User
const User = defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    preview: {
        select: {
            title: 'name',
            subtitle: 'email',
        }
    },
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text'
        }),
    ]
});

export default User;
