import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../store/acctions/userActions";
import { Weather } from "../components/Weather";

export const AppRouter = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    // const response = await axios.get("https://api.escuelajs.co/api/v1/users");

    // dispatch({
    //   type: UserActionTypes.GET_USERS_SUCCESS,
    //   payload: response.data,
    // });
    dispatch(getUsers() as any);
  };

  return (
    <BrowserRouter>
      <Routes>
        {users.currentUser ? (
          <>
            <Route path="weather" element={<Weather />} />
          </>
        ) : (
          <Route path="login" element={<LoginPage />} />
          
        )}

         <Route path="register" element={<RegisterPage/>} />        
         <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
