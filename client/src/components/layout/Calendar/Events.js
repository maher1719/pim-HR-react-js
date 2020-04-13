import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import EventsApi from 'api/EventsApi';
import Auth from "../Auth";

let initialState = {
    
    events: {},

};
export const createEvent= createAsyncThunk(
    'Calendar/BigCalendar',
    async (data,{
        async rejectWithValue(value) {
            try {
                console.log("user",Auth.user);
                console.log("data",data);
                await EventsApi.createEvent(data);
            } catch (error) {
                return rejectWithValue(error.data);
            }
        }})
)