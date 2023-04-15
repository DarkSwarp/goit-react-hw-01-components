import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(friend => {
        return (
          <li className={styles.item} key={friend.id}>
            {friend.isOnline === true ? (
              <span className={styles.statusOn}></span>
            ) : (
              <span className={styles.statusOff}></span>
            )}
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
