import React from 'react';
import Button from './../forms/Button';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button className="btn load" onClick={() => onLoadMoreEvt()}>
      Load More
    </Button>
  );
};

export default LoadMore;
