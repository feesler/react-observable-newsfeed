import React from 'react';
import PropTypes, { useEffect } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { readNews } from '../store/newsFeedSlice';
import NewsCard from './NewsCard';

function NewsFeed(props) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.newsFeed);

  useEffect(() => {
    dispatch(readNews());
  }, [])

  return (
    <div className="feed">
      { items && items.map((item) =>
        <NewsCard {...item} />
      )}
    </div>
  )
}

NewsFeed.propTypes = {

};

export default NewsFeed;
