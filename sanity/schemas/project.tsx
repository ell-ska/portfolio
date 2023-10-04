import slugify from '@/utils/slugify'
import { defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'
import { ProjectIcon } from '@/components/Icons'

const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    orderRankField({
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'sneak_peek',
      title: 'Sneak peek',
      type: 'boolean',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: input => slugify(input),
      },
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
      validation: rule => rule.required(),
      fields: [
        // [] add alt texts
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
    defineField({
      name: 'preview_video',
      title: 'Preview video',
      type: 'file',
    }),
  ],
  initialValue: {
    sneak_peek: false,
  },
  preview: {
    select: {
      title: 'name',
      color: 'accent_color',
    },
    prepare({ title, color }) {
      return {
        title,
        media: <ProjectIcon color={color} />,
      }
    },
  },
})

export { project }
