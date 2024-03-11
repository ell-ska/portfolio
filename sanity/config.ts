import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { Paintbrush, Info } from 'lucide-react'
import { apiVersion, dataset, projectId } from './env'
import { schema } from './schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['about'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('About')
              .id('about')
              .icon(Info)
              .child(
                S.document()
                  .title('About')
                  .schemaType('about')
                  .documentId('about'),
              ),
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Projects',
              icon: Paintbrush,
              S,
              context,
            }),
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
