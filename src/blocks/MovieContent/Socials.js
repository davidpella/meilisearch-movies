import styled from 'styled-components'
import IconLink from 'components/IconLink'
import {
  FacebookLogo,
  ImdbLogo,
  InstagramLogo,
  TwitterLogo,
} from 'components/icons'

const Wrapper = styled.div`
  margin-top: 22px;
  > a {
    margin-right: 12px;
  }
`

const Socials = ({ socials }) => {
  const { facebook_id, imdb_id, instagram_id, twitter_id } = socials
  return (
    <Wrapper style={{ marginTop: 22 }}>
      {imdb_id && (
        <IconLink link={`https://www.imdb.com/title/${imdb_id}`}>
          <ImdbLogo height={30} />
        </IconLink>
      )}
      {instagram_id && (
        <IconLink link={`https://www.instagram.com/${instagram_id}`}>
          <InstagramLogo height={30} />
        </IconLink>
      )}
      {twitter_id && (
        <IconLink link={`https://twitter.com/${twitter_id}`}>
          <TwitterLogo height={30} />
        </IconLink>
      )}
      {facebook_id && (
        <IconLink link={`https://www.facebook.com/${facebook_id}`}>
          <FacebookLogo height={30} />
        </IconLink>
      )}
    </Wrapper>
  )
}
export default Socials
