export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
    },
    {
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'eventDescription',
      title: 'Event Description',
      type: 'text',
    },
    {
      name: 'eventCategory',
      title: 'Event Category',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
        ],
      },
    },
  ],
}
