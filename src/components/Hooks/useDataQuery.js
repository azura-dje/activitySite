import {useStaticQuery, graphql} from 'gatsby'

export const useDataQuery = () => {
  const dataQuery = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
      allContentfulActivity {
        edges {
          node {
            couple
            id
            description {
              description
            }
            duration
            cover {
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            group
            guide
            price
            promotion
            slug
            subtitle
            ticket
            title
            transport
            type
          }
        }
      }
    }
  `)
  return dataQuery
}
