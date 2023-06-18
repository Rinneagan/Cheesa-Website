export default {
  name: 'year',
  type: 'document',
  title: 'Academic Year',
  fields: [
    {
      name: 'year',
      title: 'Academic Year',
      type: 'string',
    },
    {
      name: 'executiveCommittee',
      title: 'Executive Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'executiveImage',
              title: 'Executive Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'academicBoard',
      title: 'Academic Board',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'academicImage',
              title: 'Academic Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'editorialBoard',
      title: 'Editorial Board',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'editorialImage',
              title: 'Editorial Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'organizingCommittee',
      title: 'Organizing Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'organizingImage',
              title: 'Organizing Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'judicialCommittee',
      title: 'Judicial Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'judicialImage',
              title: 'Judicial Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'womenCommission',
      title: 'Wommen Commission',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'womenImage',
              title: 'Women Commission Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'sportsCommittee',
      title: 'Sports Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'sportsImage',
              title: 'Sports Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'electoralCommittee',
      title: 'Electoral Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'electoralImage',
              title: 'Electoral Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'PrayerBoard',
      title: 'Prayer and Intercessory Board',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'prayerImage',
              title: 'Prayer and Intercessory Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'MentorshipBoard',
      title: 'Mentorship Board',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'mentorshipImage',
              title: 'Mentorship Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'peerCounselingBoard',
      title: 'Peer Counseling Board',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'peerCounselingImage',
              title: 'Peer Counseling Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'industrialCommittee',
      title: 'Industrial Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'industrialCommitteeImage',
              title: 'Industrial Committee Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'trachtechCommittee',
      title: 'Trachtech Committee',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'portfolio',
              title: 'Portfolio',
              type: 'string',
            },
            {
              name: 'trachtechCommitteeImage',
              title: 'Trachtech Committee Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
