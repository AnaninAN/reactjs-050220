import './Header.scss';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from'@material-ui/icons/Add'

export class Header extends Component {
  render() {
    const { chatName } = this.props;

    return (
      <div className="header">
        <div className="header-lc">
          <Button variant="contained" color="primary" endIcon={<AddIcon />}>Add</Button>
        </div>
    <div className="header-pc">{chatName}</div>
      </div>
    );
  }
}