import React, { Component, Fragment } from 'react'
import './pin.scss'

export class Pin extends Component {
  
  state = {
    password: '',
    lastNumKeyin: null,
    misMatch: false,
  };

  slots = [...Array(this.props.size).keys()];

  openKeypad = () => {    
    this.passwordInput.focus();
  }

  validate(password) {
    console.log(password)
    if (password != '2018') {
      setTimeout(() => {
        this.setState({misMatch: true, password: ''})
      }, 1000);
    } else {
      this.setState({misMatch: false})
    }
  }

  onChange = (e) => {
    const password = e.target.value;
    const { size } = this.props;

    if (password.length === size) {
      this.validate(password);
    }

    if (password.length > size) {
      return false;
    }

    this.setState({
      password,
      misMatch: false,
      lastNumKeyin: password[password.length - 1]
    });

    setTimeout(() => {
      this.setState({lastNumKeyin: null});
    }, 500);
  }

  activeClass = (i) => {
    return this.state.password.length === i ? 'pinslot-active':'';
  }

  statusSymbol = (i) => {
    const { password, lastNumKeyin } = this.state;

    if (lastNumKeyin && password.length - 1 === i) {
      return lastNumKeyin;
    }

    if (password.length - 1 >= i) {
      return <span className="filled">&bull;</span>
    }
    
    return '-'
  }

  renderError() {
    return (
      this.slots.map(i => 
        <div key={i} className="pinslot pinslot-error">-</div>
      )
    );
  }

  renderSlots() {
    return (
      this.slots.map(i => 
        <div key={i} className={`pinslot ${this.activeClass(i)}`}>
          {this.statusSymbol(i)}
        </div>
      )
    );
  }

  componentDidMount() {
    this.openKeypad();
  }

  render() {
    const { misMatch } = this.state;
    return (
      <Fragment>
        <div className="pin-container" onClick={this.openKeypad}>
          {misMatch? this.renderError() : this.renderSlots()}
          <form>
            <input
              ref={ref => this.passwordInput = ref}
              onChange={this.onChange}
              value={this.state.password}
              type="tel" 
              style={{position:'fixed', top: '-9999px', fontSize: '16px'}} />
          </form>
        </div>
        {misMatch && <div className="pin-error-msg">Invalid password. Please try again.</div>}
      </Fragment>
    )
  }
}
