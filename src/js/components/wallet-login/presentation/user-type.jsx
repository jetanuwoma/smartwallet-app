import React from 'react'
import Radium from 'radium'
import {FlatButton} from 'material-ui'
import {theme} from 'styles'

import HoverButton from '../../common/hover-button'

import {Container, Header, Content, Footer, InfoLink} from '../../structure'

const STYLES = {
  tile: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '8px 0 8px',
    borderRadius: '2px',
    primary: false,
    backgroundColor: theme.jolocom.gray1,
    selectedColor: theme.palette.primary1Color,
    textAlign: 'center',
    padding: '16px',
    boxSizing: 'border-box'
  },
  tileinside: {
    color: theme.jolocom.gray5,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    fontWeight: 200,
    fontSize: '18px'
  },
  img: {
    flex: 1,
    userSelect: 'none',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginBottom: '8px'
  }
}

const UserType = (props) => {
  const messageWhy = (
    <div>
      If you select the <b>Geek</b> option, you are the keeper of your
      passphrase that was randomly generated by the mouse moving you just did
      to uncover the picture. You must be prepared to keep the passphrase you
      in a safe place where you are not going to loose it and where others
      can't get to it. This phrase and a secret pin is how you 'login' to your
      wallet in the future. <br /><br />If you select the <b>No Hassle </b>
      option, we will save your passphrase for you, but you will then need a
      password to get it.
    </div>
  )

  return (
    <Container>
      <Header title="I would like to login..." />
      <Content>
        <HoverButton
          backgroundColor={STYLES.tile.backgroundColor}
          hoverColor={STYLES.tile.selectedColor}
          style={STYLES.tile}
          onClick={() => props.onSelect('expert')}>
          <div style={STYLES.tileinside}>
            <div style={{...STYLES.img, ...{
              backgroundImage: 'url(/img/img_techguy.svg)'
            }}} />...with my secure phrase
          </div>
        </HoverButton>
        <HoverButton
          backgroundColor={STYLES.tile.backgroundColor}
          hoverColor={STYLES.tile.selectedColor}
          style={STYLES.tile}
          onClick={() => props.onSelect('layman')}>
          <div style={STYLES.tileinside}>
            <div style={{...STYLES.img, ...{
              backgroundImage: 'url(/img/img_nohustle.svg)'
            }}} />...with my username and password
          </div>
        </HoverButton>

        <FlatButton onClick={() => props.onWhySelect(messageWhy)}>
          WHY?
        </FlatButton>
      </Content>
      <Footer>
        <InfoLink
          info="Don't have a wallet yet?"
          link="Create one"
          to="/registration"
        />
      </Footer>
    </Container>
  )
}

UserType.propTypes = {
  value: React.PropTypes.string.isRequired,
  valid: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  onWhySelect: React.PropTypes.func.isRequired
}

export default Radium(UserType)
