import React from 'react';
import PropTypes from 'prop-types';
import { formatTimePretty } from '../utils/DateTimeUtils';
import { decodeXML } from 'entities';

function NewsCard(props) {
  const { item } = props;
  const postTime = item.date * 1000;

  const decodedContent = decodeXML(item.text);

  return (
    <div className="feed-item post">
      <div className="post__header">
        <div className="post__avatar"></div>
        <div className="post__title">
          <div className="post__user">User name</div>
          <div className="post__time">{formatTimePretty(postTime)}</div>
        </div>
      </div>
      <p className="post__content">{decodedContent}</p>
      <div className="post__bottom">
        <span>Likes {item.likes.count}</span>
        <span>Comments {item.comments.count}</span>
        <span>Reposts {item.reposts.count}</span>
        <span>Views {item.views.count}</span>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NewsCard;
