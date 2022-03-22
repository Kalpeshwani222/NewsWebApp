import axios from "axios";
import { NEWS_DELETE_FAIL, NEWS_DELETE_REQUEST, NEWS_DELETE_SUCCESS, SAVEDNEWS_LIST_FAIL, SAVEDNEWS_LIST_REQUEST, SAVEDNEWS_LIST_SUCCESS, SAVE_NEWS_FAIL, SAVE_NEWS_REQUEST, SAVE_NEWS_SUCCESS } from "../constants/savedNewsConstants";


//geting the saved news
export const listSavednews = () => async (dispatch,getState) =>{
    
    try {
        dispatch({
            type:SAVEDNEWS_LIST_REQUEST,
        });

        const {
            userLogin : {userInfo},
        } = getState();

        const config = {
            headers: {
                Authorization:`Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get('/api/savedNews',config);

        dispatch({
            type:SAVEDNEWS_LIST_SUCCESS,
            payload:data,
        });

    } catch (error) {
        const message = error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message;

                        dispatch({
                            type:SAVEDNEWS_LIST_FAIL,
                            payload:message,
                        });
    }
}


//save news


export const addSaveNews = (title,description,imageUrl,newsUrl,author) => async (dispatch,getState) =>{
    try {
        dispatch({
            type:SAVE_NEWS_REQUEST,
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
            `/api/savedNews/saved`,
            {title,description,imageUrl,newsUrl,author},
            config
        );

        dispatch({
            type: SAVE_NEWS_SUCCESS,
            payload:data,
        });

    } catch (error) {
        const message = 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        dispatch({
            type:SAVE_NEWS_FAIL,
            payload:message,
        });
    }
}



//delete

export const deleteNewsAction = (id) => async (dispatch,getState) =>{
    try {
        dispatch({
            type:NEWS_DELETE_REQUEST,
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

        const {data} = await axios.delete(
            `/api/savedNews/${id}`,
            config
        );

        dispatch({
            type: NEWS_DELETE_SUCCESS,
            payload:data,
        });

    } catch (error) {
        const message = 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        dispatch({
            type:NEWS_DELETE_FAIL,
            payload:message,
        });
    }
}
