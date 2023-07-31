import { defineField, defineType } from 'sanity'

const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'accent_color',
      title: 'Accent color',
      description: 'Color in hex code',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        defineField({
          name: 'live_project',
          title: 'Link to live project',
          type: 'url',
        }),
        defineField({
          name: 'source_code',
          title: 'Link to source code',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'phone_images',
      title: 'iPhone images',
      type: 'object',
      fields: [
        defineField({
          name: 'main',
          title: 'Main image',
          type: 'image',
          validation: rule => rule.required(),
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary image',
          type: 'image',
        }),
        defineField({
          name: 'third',
          title: 'Third image',
          type: 'image',
        }),
      ],
    }),
  ],
})

export { projects }
