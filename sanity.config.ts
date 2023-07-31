import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { InfoOutlineIcon } from '@sanity/icons'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['about'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('About')
              .id('about')
              .icon(InfoOutlineIcon)
              .child(
                S.document()
                  .title('About')
                  .schemaType('about')
                  .documentId('about'),
              ),
            S.documentTypeListItem('projects').title('Projects'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schema,
    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
