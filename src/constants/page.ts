export const executives_query = `
*[_type == "year" && year == "2023"][0]{
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
             judicial_image{
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
