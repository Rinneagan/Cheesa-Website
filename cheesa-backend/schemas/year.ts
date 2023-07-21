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
      name: 'executive_committee',
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
              name: 'img_url',
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
      name: 'academic_board',
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
              name: 'img_url',
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
      name: 'editorial_board',
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
              name: 'img_url',
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
      name: 'organizing_committee',
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
              name: 'img_url',
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
      name: 'judicial_committee',
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
              name: 'img_url',
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
      name: 'women_commission',
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
              name: 'img_url',
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
      name: 'sports_committee',
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
              name: 'img_url',
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
      name: 'electoral_committee',
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
              name: 'img_url',
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
      name: 'prayer_board',
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
              name: 'img_url',
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
      name: 'mentorship_board',
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
              name: 'img_url',
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
      name: 'peer_counseling_board',
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
              name: 'img_url',
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
      name: 'industrial_committee',
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
              name: 'img_url',
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
      name: 'trachtech_committee',
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
              name: 'img_url',
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
    {
      name: 'welfare_committee',
      title: 'Welfare Committee',
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
              name: 'img_url',
              title: 'Welfare Committee Image',
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
