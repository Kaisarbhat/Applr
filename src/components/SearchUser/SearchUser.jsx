import React, { useState, useEffect } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { searchUserAction } from './../../Redux/Auth/auth_action';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { searchUser, loading, error } = useSelector((store) => store.auth);

  useEffect(() => {
    if (username.trim()) {
      dispatch(searchUserAction(username));
    } else {
      // Clear search results when input is empty
      dispatch({ type: 'SEARCH_USER_SUCCESS', payload: [] });
    }
  }, [username, dispatch]);

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
  };

  const handleClick = (id) => {
    console.log('id ', id);
    setUsername('');
  };

  return (
    <div>
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full"
          onChange={handleSearchUser}
          type="text"
          placeholder="Search User"
          value={username}
        />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          searchUser.length > 0 && (
            <div className="absolute w-full z-10 top-[4.5rem]">
              {searchUser.map((item) => (
                <Card
                  key={item.id}
                  className="cursor-pointer mb-2"
                  onClick={() => handleClick(item.id)}
                >
                  <CardHeader
                    avatar={
                      <Avatar src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400" />
                    }
                    title="k_4_1_5_1_r"
                    subheader={"k4151r"}
                  />
                </Card>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchUser;