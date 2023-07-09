export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'image_url',
      title: 'Gallery Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image_alt',
      title: 'Gallery Alt Text',
      type: 'string',
    },
  ],
}
