import React from 'react'
import Radium from 'radium'

import {theme} from 'styles'

import VerifiedShield from '../../../wallet/presentation/ui/verified-shield'
import VerificationButtons from '../../../wallet/presentation/ui/verification-buttons' // eslint-disable-line max-len
import {TextField, ListItem} from 'material-ui'
import {Block} from '../../../structure'

const STYLES = {
  verifiedShield: {
    marginLeft: '0px',
    position: 'absolute',
    right: '20px',
    marginTop: '25px'
  },
  icon: {
    top: '16px',
    left: '8px'
  },
  listItem: {
    whiteSpace: 'nowrap',
    padding: '0 16px 0 54px'
  },
  verificationBlock: {
    padding: '0 0px 0 54px'
  },
  innerDivStyle: {
    padding: '0 0 0 0',
    fontSize: theme.textStyles.subheadline.fontSize,
    color: theme.textStyles.subheadline.color,
    fontWeight: theme.textStyles.subheadline.fontWeight,
    lineHeight: '24px'
  }
}

@Radium
export default class NotVerifiedItem extends React.Component {
  static propTypes = {
    icon: React.PropTypes.any,
    field: React.PropTypes.string,
    textLabel: React.PropTypes.string.isRequired,
    textValue: React.PropTypes.string.isRequired,
    requestVerificationCode: React.PropTypes.func,
    resendVerificationCode: React.PropTypes.func,
    enterVerificationCode: React.PropTypes.func,
    setFocusedPin: React.PropTypes.func,
    changePinValue: React.PropTypes.func,
    pinFocused: React.PropTypes.string
  }
  renderVerificationInfo = (field) => {
    if (field === 'phone') {
      return (
        <div>
          <div style={STYLES.verificationBlock}>
            <ListItem
              innerDivStyle={STYLES.innerDivStyle}
              primaryText={`We sent you an authentification code via sms
                for verification.`}
              disabled />
          </div>
          <VerificationButtons
            attrType="phone"
            requestVerificationCode={this.props.requestVerificationCode}
            resendVerificationCode={this.props.resendVerificationCode}
            enterVerificationCode={this.props.enterVerificationCode}
            index={0}
            smsCode={'1111'}
            setFocusedPin={(value) => { this.props.setFocusedPin(value, 0) }}
            changePinValue={(value) => { this.props.changePinValue(value, 0) }}
            focused={this.props.pinFocused}
            value={'01111 number from service'}
            codeIsSent={false} />
        </div>
      )
    } else if (field === 'email') {
      return (
        <div>
          <div style={STYLES.verificationBlock}>
            <ListItem
              innerDivStyle={STYLES.innerDivStyle}
              primaryText={`We sent you an email
              for verification. Please confirm.`}
              disabled />
          </div>
          <VerificationButtons
            attrType="email"
            requestVerificationCode={this.props.requestVerificationCode}
            resendVerificationCode={this.props.resendVerificationCode}
            enterVerificationCode={this.props.enterVerificationCode}
            index={1}
            smsCode={'1111'}
            value={'01111 number from service'}
            codeIsSent={false} />
        </div>
      )
    }
  }

  render() {
    let leftIcon = <this.props.icon color={'grey'} />

    return (
      <div>
        <ListItem
          style={STYLES.listItem}
          leftIcon={<div style={STYLES.icon}>{leftIcon}</div>}
          rightIconButton={<VerifiedShield
            style={STYLES.verifiedShield}
            verified={false} />}
          disabled >
          <TextField
            floatingLabelText={`Unverified ${this.props.textLabel}`}
            floatingLabelFixed
            underlineShow={false}
            value={this.props.textValue} />
        </ListItem>
        <Block>
          {this.renderVerificationInfo(this.props.field)}
        </Block>
      </div>
    )
  }
}