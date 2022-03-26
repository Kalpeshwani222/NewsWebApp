import {SAVEDNEWS_LIST_REQUEST,SAVEDNEWS_LIST_SUCCESS,SAVEDNEWS_LIST_FAIL, SAVE_NEWS_REQUEST, SAVE_NEWS_SUCCESS, SAVE_NEWS_FAIL, NEWS_DELETE_REQUEST, NEWS_DELETE_SUCCESS, NEWS_DELETE_FAIL} from "../constants/savedNewsConstants";

//for getting news
export const savedNewsReducers = (state = {savednews:[]}, action) =>{

    switch(action.type){
        case SAVEDNEWS_LIST_REQUEST:
            return {loading:true};
        
        case SAVEDNEWS_LIST_SUCCESS:
           return {loading:false,savednews : action.payload};
      
        case SAVEDNEWS_LIST_FAIL:
            return {loading:false, error: action.payload};
            
        default:
            return state;
    }
}  


// for saving the news item


export const saveNewsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_NEWS_REQUEST:
      return { loading: true };

    case SAVE_NEWS_SUCCESS:
      return { loading: false, success: true };

    case SAVE_NEWS_FAIL:
      return { loading: false, error: action.payload,success:false };

    default:
      return state;
  }
};

//for deleting the news

export const newsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_DELETE_REQUEST:
      return { loading: true };

    case NEWS_DELETE_SUCCESS:
      return { loading: false, success: true };

    case NEWS_DELETE_FAIL:
      return { loading: false, error: action.payload,success:false };

    default:
      return state;
  }
};
