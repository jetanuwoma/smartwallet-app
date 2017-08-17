import React from 'react'
import Immutable from 'immutable'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { stub } from '../../../../../test/utils'
import WalletIdentityScreen from './identity'

describe.only('(Component) WalletIdentityScreen', () => {
  it('should render properly the first time', () => {
    const getIdentityInformation = stub()
    const wrapper = shallow(
      (<WalletIdentityScreen.WrappedComponent {
        ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
          wallet: {
            identity: {
              loaded: false,
              webId: 'https://demo.webid.jolocom.com/profile/card',
              username: {
                verified: true,
                value: 'AnnikaHamman'
              },
              contact: {
                phones: [{
                  number: '+49 176 12345678',
                  type: 'mobile',
                  verified: true
                }],
                emails: [{
                  address: 'info@jolocom.com',
                  type: 'mobile',
                  verified: true
                }]
              },
              passports: [],
              error: false
            }
          }
        }))
      }
        changePinValue={() => {}}
        confirmEmail={() => {}}
        confirmPhone={() => {}}
        expandField={() => {}}
        getIdentityInformation={getIdentityInformation}
        goTo={() => {}}
        openConfirmDialog={() => {}}
        resendVerificationLink={() => {}}
        resendVerificationSms={() => {}}
        saveToBlockchain={() => {}}
        setFocusedPin={() => {}}
        startPhoneVerification={() => {}}
        startEmailVerification={() => {}}
      />),
      { context: { muiTheme: { } } }
    )
    wrapper.instance()
    expect(getIdentityInformation.called).to.be.true
    expect(getIdentityInformation.calls).to.deep.equal([{args: []}])
  })
  it('should call goTo with proper params', () => {
    const goTo = stub()
    const wrapper = shallow((<WalletIdentityScreen.WrappedComponent {
      ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
        wallet: {
          identity: {
            loaded: false,
            webId: '',
            username: {},
            contact: {
              emails: [],
              phones: []
            },
            passport: {},
            error: false
          }
        }
      }))
    }
      changePinValue={() => {}}
      confirmEmail={() => {}}
      confirmPhone={() => {}}
      expandField={() => {}}
      getIdentityInformation={() => {}}
      goTo={goTo}
      openConfirmDialog={() => {}}
      resendVerificationLink={() => {}}
      resendVerificationSms={() => {}}
      saveToBlockchain={() => {}}
      setFocusedPin={() => {}}
      startPhoneVerification={() => {}}
      startEmailVerification={() => {}} />),
    { context: { muiTheme: { } } })

    wrapper.find('WalletIdentity').props().goTo('test')
    expect(goTo.called).to.be.true
    expect(goTo.calls).to.deep.equal([{args: ['test']}])
  })
  it('resendVerificationCode should return resendVerificationSms when the attribute type is phone', () => { // eslint-disable-line max-len
    const resendVerificationSms = stub()
    const wrapper = shallow(
      (<WalletIdentityScreen.WrappedComponent {
        ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
          wallet: {
            identity: {
              loaded: false,
              webId: '',
              username: {},
              contact: {
                phones: [],
                emails: []
              },
              passport: {},
              error: false
            }
          }
        }))
      }
        changePinValue={() => {}}
        confirmEmail={() => {}}
        confirmPhone={() => {}}
        expandField={() => {}}
        getIdentityInformation={() => {}}
        goTo={() => {}}
        openConfirmDialog={() => {}}
        resendVerificationLink={() => {}}
        resendVerificationSms={resendVerificationSms}
        saveToBlockchain={() => {}}
        setFocusedPin={() => {}}
        startEmailVerification={() => {}}
        startPhoneVerification={() => {}}
       />),
      { context: { muiTheme: { } } }
    )

    wrapper.instance().resendVerificationCode({
      attrType: 'phone',
      attrValue: '1234',
      index: '0'
    })()
    expect(resendVerificationSms.called).to.be.true
    expect(resendVerificationSms.calls).to.deep.equal([{args: [{
      phone: '1234',
      index: '0'
    }]}])
  })
  it('resendVerificationCode should return resendVerificationLink when the attribute type is email', () => { // eslint-disable-line max-len
    const resendVerificationLink = stub()
    const wrapper = shallow((<WalletIdentityScreen.WrappedComponent {
      ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
        wallet: {
          identity: {
            loaded: false,
            webId: '',
            username: {},
            contact: {
              phones: [],
              emails: []
            },
            passport: {},
            error: false
          }
        }
      }))
    }
      changePinValue={() => {}}
      confirmEmail={() => {}}
      confirmPhone={() => {}}
      expandField={() => {}}
      getIdentityInformation={() => {}}
      goTo={() => {}}
      openConfirmDialog={() => {}}
      resendVerificationLink={resendVerificationLink}
      saveToBlockchain={() => {}}
      setFocusedPin={() => {}}
      startEmailVerification={() => {}}
      startPhoneVerification={() => {}}
     />),
    { context: { muiTheme: { } } })

    wrapper.instance().resendVerificationCode({
      attrType: 'email',
      attrValue: 'test@test.com',
      index: '0'
    })()
    expect(resendVerificationLink.called).to.be.true
    expect(resendVerificationLink.calls).to.deep.equal([{args: [{
      email: 'test@test.com',
      index: '0'
    }]}])
  })
  it('enterVerificationCode should return confirmPhone when the attribute type is phone', () => { // eslint-disable-line max-len
    const confirmPhone = stub()
    const wrapper = shallow(
      (<WalletIdentityScreen.WrappedComponent {
        ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
          wallet: {
            identity: {
              loaded: false,
              webId: '',
              username: {},
              contact: {
                phones: [],
                emails: []
              },
              passport: {},
              error: false
            }
          }
        }))
      }
        changePinValue={() => {}}
        confirmEmail={() => {}}
        confirmPhone={confirmPhone}
        expandField={() => {}}
        getIdentityInformation={() => {}}
        goTo={() => {}}
        openConfirmDialog={() => {}}
        resendVerificationLink={() => {}}
        resendVerificationSms={() => {}}
        saveToBlockchain={() => {}}
        setFocusedPin={() => {}}
        startEmailVerification={() => {}}
        startPhoneVerification={() => {}}
        />),
      { context: { muiTheme: { } } }
    )

    wrapper.instance().enterVerificationCode({
      attrType: 'phone',
      attrValue: '1234',
      index: '1'
    })()
    expect(confirmPhone.called).to.be.true
    expect(confirmPhone.calls).to.deep.equal([{args: ['1']}])
  })
  it('enterVerificationCode should return confirmEmail when the attribute type is email', () => { // eslint-disable-line max-len
    const confirmEmail = stub()
    const wrapper = shallow((<WalletIdentityScreen.WrappedComponent {
      ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
        wallet: {
          identity: {
            loaded: false,
            webId: '',
            username: {},
            contact: {
              phones: [],
              emails: []
            },
            passport: {},
            error: false
          }
        }
      }))
    }
      changePinValue={() => {}}
      confirmEmail={confirmEmail}
      confirmPhone={() => {}}
      expandField={() => {}}
      getIdentityInformation={() => {}}
      goTo={() => {}}
      openConfirmDialog={() => {}}
      resendVerificationLink={() => {}}
      resendVerificationSms={() => {}}
      saveToBlockchain={() => {}}
      setFocusedPin={() => {}}
      startEmailVerification={() => {}}
      startPhoneVerification={() => {}} />),
      { context: { muiTheme: { } } }
    )

    wrapper.instance().enterVerificationCode({
      attrType: 'email',
      attrValue: 'test@test.com'
    })()
    expect(confirmEmail.called).to.be.true
    expect(confirmEmail.calls).to.deep.equal([{args: [{
      email: 'test@test.com'
    }]}])
  })
  it('should call openConfirmDialog on showVerificationWindow with proper params', () => { // eslint-disable-line max-len
    const openConfirmDialog = stub()
    const wrapper = shallow((<WalletIdentityScreen.WrappedComponent {
      ...WalletIdentityScreen.mapStateToProps(Immutable.fromJS({
        wallet: {
          identity: {
            loaded: false,
            webId: '',
            username: {},
            contact: {
              phones: [],
              emails: []
            },
            passport: {},
            error: false
          }
        }
      }))
    }
      changePinValue={() => {}}
      confirmEmail={() => {}}
      confirmPhone={() => {}}
      expandField={() => {}}
      getIdentityInformation={() => {}}
      goTo={() => {}}
      openConfirmDialog={openConfirmDialog}
      resendVerificationLink={() => {}}
      resendVerificationSms={() => {}}
      saveToBlockchain={() => {}}
      setFocusedPin={() => {}}
      startEmailVerification={() => {}}
      startPhoneVerification={() => {}} />),
      { context: { muiTheme: { } } }
    )
    const window = {
      message: '',
      attrValue: '',
      attrType: '',
      index: '',
      rightButtonLabel: '',
      leftButtonLabel: ''
    }
    wrapper.instance().showVerificationWindow(window, () => {})
    expect(openConfirmDialog.called).to.be.true
    expect(openConfirmDialog.calls).to.deep.equal([{
      args: [undefined, '', '', undefined, '']
    }])
  })
})
