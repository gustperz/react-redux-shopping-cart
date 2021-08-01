import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';
import SearchInput from './components/SearchInput';
import UserInfo from './components/UserInfo';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchVisible = () => setSearchVisible(visible => !visible);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>

      <div className={styles.actions}>
        {!searchVisible && (
          <button onClick={toggleSearchVisible} className="md:hidden" data-testid="togle-search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        )}

        <UserInfo />
      </div>

      <div
        className={`${styles.search} ${!searchVisible ? styles.searchHidden : ''}`}
        data-testid="search"
      >
        <SearchInput />
        <button onClick={toggleSearchVisible} className="md:hidden ml-4">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </header>
  );
};

export default Header;
