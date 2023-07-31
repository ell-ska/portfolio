import { defineArrayMember, defineField, defineType } from 'sanity'

const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'short_description',
      title: 'Short description',
      description: 'Shown on home page',
      type: 'string',
    }),
    defineField({
      name: 'long_description',
      title: 'Long description',
      description: 'Shown on about page',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'education',
          title: 'Education',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'school',
              title: 'School',
              type: 'string',
            }),
            defineField({
              name: 'duration',
              title: 'Duration',
              type: 'object',
              fields: [
                defineField({
                  name: 'start',
                  title: 'Start date',
                  type: 'date',
                }),
                defineField({
                  name: 'end',
                  title: 'End date',
                  type: 'date',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contact',
          title: 'Contact',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})

export { about }
