import React, { Component } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Auth = ()=> {
    return useSelector(state => state.auth.user);
}
export default Auth;