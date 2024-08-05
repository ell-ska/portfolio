import { defineArrayMember, defineField, defineType } from 'sanity'

import { DynamicIcon } from '@/components/Icons'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'short_description',
      title: 'Short description',
      description: 'Shown on home page',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'long_description',
      title: 'Long description',
      description: 'Shown on about page',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        defineField({
          name: 'skill',
          title: 'Skill',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              description: 'Pick an icon at simpleicons.org',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Icon color',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              icon: 'icon',
              color: 'color',
            },
            prepare({ title, icon, color }) {
              return {
                title,
                media: <DynamicIcon name={icon} color={color} />,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required(),
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'school',
              title: 'School',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'duration',
              title: 'Duration',
              type: 'object',
              validation: (rule) => rule.required(),
              fields: [
                defineField({
                  name: 'start',
                  title: 'Start date',
                  type: 'date',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'end',
                  title: 'End date',
                  type: 'date',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (rule) =>
                rule
                  .uri({
                    scheme: ['http', 'https', 'mailto'],
                  })
                  .required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'object',
          fields: [
            defineField({
              name: 'testimonial',
              title: 'Testimonial',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
