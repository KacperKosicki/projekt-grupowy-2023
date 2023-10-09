import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = props => {
  const [startX, setStartX] = useState(0);
  const { leftAction, rightAction } = props;
  const onTouchStart = e => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchEnd = e => {
    const endX = e.changedTouches[0].clientX;
    const difference = startX - endX;
    const swipePresentage = (difference * 100) / e.currentTarget.offsetWidth;
    if (Math.abs(swipePresentage) > 30) {
      if (swipePresentage > 0) {
        leftAction();
      } else {
        rightAction();
      }
    }
    setStartX(0);
  };

  const onClickStart = e => {
    setStartX(e.clientX);
  };

  const onClickEnd = e => {
    const endX = e.clientX;
    const difference = startX - endX;
    const swipePresentage = (difference * 100) / e.currentTarget.offsetWidth;
    if (Math.abs(swipePresentage) > 30) {
      if (swipePresentage > 0) {
        leftAction();
      } else {
        rightAction();
      }
    }
    setStartX(0);
  };

  return (
    <div
      onMouseUp={onClickEnd}
      onMouseDown={onClickStart}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {props.children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
};

export default Swipeable;
