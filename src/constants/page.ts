export const executives_query = `
*[_type == "year"]{
    academic_board[]{
          img_url{
              asset -> {
                url
              }
          },
          name,
            portfolio,
        },
      executive_committee[]{
        img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
      },
        editorial_board[]{
           img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
    },
          organizing_committee[]{
             img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
      },
          judicial_committee[]{
             img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
      },
          women_commission[]{
            img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
    },
        sports_committee[]{
           img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
        },
          electoral_committee[]{
              img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          },
          prayer_board[]{
             img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          },
          mentorship_board[]{
             img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          },
          peer_counseling_board[]{
             img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          },
          industrial_committee[]{
              img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          },
          trachtech_committee[]{
              img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          },
          welfare_committee[]{
              img_url{
            asset -> {
              url
            }
        },
        name,
          portfolio,
          }
}
`;

export const gallery_query = `
*[_type == "gallery"]{
              image_url{
                asset ->{
                  url
                }
              },
              image_alt,
              link
            }
            `;

export const lecturer_query = `*[_type == "lecturers"]{
              fullName,
                email,
              lecturerImage{
                asset -> {
                  url
                },
              },
              description
            }`;

export const events_query = `
*[_type == 'events']{
  eventName,
    eventImage{
    asset ->{
      url
    }
    },
  eventDescription,
    eventCategory
}
`;

export const testimonial_query = `
*[_type == "testimonial"]{
    name,
    img_url{
      asset->{
        url
      }
    },
    testimony,
    year,
    status
}
`;
