import React from 'react';
import PropTypes from 'prop-types';

function LinkAttachment(props) {
  const { link } = props;

  return (
    <a className="post-attachment link-attachment" href={link.url}>
      <h2 className="post-attachment__title">{link.title}</h2>
      <span className="post-attachment__caption">{link.caption}</span>
    </a>
  );
}

LinkAttachment.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
  }).isRequired,
};

LinkAttachment.defaultProps = {
  link: {
    caption: '',
  },
};

export default LinkAttachment;
