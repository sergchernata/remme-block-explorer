import React, { Component, Fragment } from 'react'
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import {telegram, telegram_white, reddit, steemit} from '../../images';

const SocialItems = [
  {
    link: 'https://t.me/remme',
    key: 'telegram',
    image: telegram
  },
  {
    link: 'https://www.reddit.com/r/remme',
    key: 'reddit',
    image: reddit
  },
  {
    link: 'https://www.facebook.com/remme.io',
    icon: 'facebook'
  },
  {
    link: 'https://twitter.com/remme_io',
    icon: 'twitter'
  },
  {
    link: 'https://medium.com/remme',
    icon: 'medium'
  },
  {
    link: 'https://www.youtube.com/channel/UCeSQ8UosUXwII-6JOh7Fi3g',
    icon: 'youtube'
  },
  {
    link: 'https://steemit.com/@remme',
    key: 'steemit',
    image: steemit
  },
  {
    link: 'https://github.com/Remmeauth',
    icon: 'github'
  },
];

class Social extends Component {
  render() {
    return (
      <Fragment>
        { SocialItems.map( item => (
          item.icon
            ? <a key={item.icon} href={item.link}><Icon type={item.icon}/></a>
            : <a className="social-link" key={item.key} href={item.link}><img src={item.image} /></a>
        ))}
        <a href="https://t.me/remme_daily">
          <Button type="primary">
            <img src={telegram_white} style={{width: 14, marginRight: 10}}/> News Channel
          </Button>
        </a>

      </Fragment>
    )
  }
}

export default Social;
