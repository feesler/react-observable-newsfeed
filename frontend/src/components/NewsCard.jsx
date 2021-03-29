import React from 'react'
import PropTypes from 'prop-types';

function NewsCard(props) {
  return (
    <div className="feed-item">
      <span>{props.text}</span>
    </div>
  )
};

NewsCard.propTypes = {

};

export default NewsCard;
