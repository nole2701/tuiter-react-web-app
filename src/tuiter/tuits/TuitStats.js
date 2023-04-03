import React from "react";
// import {toggleLike} from "./tuits-reducer";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // const toggleLikeHandler = () => {
    //     dispatch(toggleLike(tuit))
    // }


    return(
        <div className="row justify-content-center">
            <div className="col-2" align="center">
            <i className="bi bi-chat"></i> {tuit.replies}
            </div>
            <div className="col-2" align="center">
            <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
            </div>
            <div className="col-2" align="center">
                {tuit.liked ? <i className="bi bi-heart-fill text-danger m-1" 
                onClick={() => dispatch(updateTuitThunk({...tuit,likes: tuit.likes - 1, liked: false}))}></i> : 
                <i className="bi bi-heart m-1"
                onClick={() => dispatch(updateTuitThunk({...tuit,likes: tuit.likes + 1, liked: true}))}></i>}
                {tuit.likes}
            </div>
            <div className="col-2" align="center">
                {tuit.disliked ? <i className="bi bi-heartbreak-fill text-danger m-1" 
                onClick={() => dispatch(updateTuitThunk({...tuit,dislikes: tuit.dislikes - 1, disliked: false}))}></i> : 
                <i className="bi bi-heartbreak m-1"
                onClick={() => dispatch(updateTuitThunk({...tuit,dislikes: tuit.dislikes + 1, disliked: true}))}></i>}
                {tuit.dislikes}
            </div>
            <div className="col-2" align="center">
            <i className="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;