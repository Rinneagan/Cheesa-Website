export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'img_url',
      title: 'Photograph',
      type: 'image',
    },
    {
        name: "year",
        title: "Year (e.g Year 1)",
        type: "string"
    },
    {
      name: 'status',
      title: 'Status (e.g Student)',
      type: 'string',
      options: {
        list: [
          {title: 'Alumnus', value: 'alumnus'},
          {title: 'Student', value: 'student'},
          {title: 'Lecturer', value: 'lecturer'},
        ],
      },
    },
    {
      name: 'testimony',
      title: 'Message Body',
      type: 'text',
    },
  ],
}
