import React from 'react';
import s from './SpinnerLayout.module.css';

import Spinner from 'components/common/spinner/Spinner';

function SpinnerLayout() {
  return (
    <div className={s.spinner_container}>
      <Spinner />
    </div>
  );
}

export default SpinnerLayout;
