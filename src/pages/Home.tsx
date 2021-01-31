import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { increase, decrease, increaseBy, changeUsername } from '@actions/index';
import { MainHeader } from '@components/common/header';

function Home() {
  const { count, username } = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();
  console.log(count, 'count');
  console.log(username, 'username');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.username);
    const usernameText = e.target.username.value;
    console.log(usernameText);

    dispatch(changeUsername(usernameText));
    e.target.username.value = '';
  };

  return (
    <div>
      <MainHeader />

      <h3 style={{ color: 'black' }}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      <div>counter: {count}</div>
      <button type="button" onClick={() => dispatch(increaseBy(10))}>
        increase
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        decrease
      </button>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
      {username}
    </div>
  );
}

export default Home;
