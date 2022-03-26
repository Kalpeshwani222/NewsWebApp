import {NEWS_SHARE_REQUEST,NEWS_SHARE_SUCCESS,NEWS_SHARE_FAIL} from "../constants/shareNewsConstants"
import axios  from "axios";


export const ShareNewsAction = (email,newsUrl,fromemail) => async (dispatch,getState) =>{
    try {
        dispatch({
            type:NEWS_SHARE_REQUEST,
        })

         const { 
            userLogin : {userInfo},
        } = getState();

        const config ={
            headers: {
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.post(
            `/api/share/shareNews`,
            {email,newsUrl,fromemail},
            config
        );

        dispatch({
            type: NEWS_SHARE_SUCCESS,
            payload:data,
        });

    } catch (error) {
        const message = 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        dispatch({
            type:NEWS_SHARE_FAIL,
            payload:message,
        });
    }
}