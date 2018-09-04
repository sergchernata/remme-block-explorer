import React, { Component, Fragment } from 'react'
import { Icon } from 'antd';

const SocialItems = [{
    link: 'https://www.facebook.com/remme.io',
    icon: 'facebook'
  },
  {
    link: 'https://twitter.com/remme_io',
    icon: 'twitter'
  },
  {
    link: 'https://github.com/Remmeauth',
    icon: 'github'
  }
];

class Social extends Component {
  render() {
    return (
      <Fragment>
        { SocialItems.map( item => (
          <a key={item.icon} href={item.link}><Icon type={item.icon}/></a>
        ))}
      </Fragment>
    )
  }
}

export default Social;
