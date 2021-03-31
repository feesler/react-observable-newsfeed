import React from 'react';
import PropTypes from 'prop-types';
import { formatTimePretty } from '../utils/DateTimeUtils';
import { decodeXML } from 'entities';
import { ReactComponent as LikesIcon } from '../assets/likes-icon.svg';
import { ReactComponent as CommentsIcon } from '../assets/comments-icon.svg';
import { ReactComponent as RepostsIcon } from '../assets/reposts-icon.svg';
import { ReactComponent as ViewsIcon } from '../assets/views-icon.svg';
import IconCounter from './IconCounter';

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
        <IconCounter icon={LikesIcon} count={item.likes.count} />
        <IconCounter icon={CommentsIcon} count={item.comments.count} />
        <IconCounter icon={RepostsIcon} count={item.reposts.count} />
        <IconCounter className="align-right" icon={ViewsIcon} count={item.views.count} />
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NewsCard;
