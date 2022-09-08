export default {
  name: 'colour',
  type: 'document',
	title: 'Color',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'translation',
      type: 'string',
      title: 'Translation'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color'
    },
    {
      name: 'text_color',
      title: 'Text color',
      type: 'color'
    }
  ]
}