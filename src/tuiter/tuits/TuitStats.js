import React from "react";
import {toggleLike} from "./tuits-reducer";
import {useDispatch} from "react-redux";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const toggleLikeHandler = () => {
        dispatch(toggleLike(tuit))
    }


    return(
        <div className="row justify-content-center">
            <div className="col-3" align="center">
            <i className="bi bi-chat"></i> {tuit.replies}
            </div>
            <div className="col-3" align="center">
            <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
            </div>
            <div className="col-3" align="center">
                {tuit.liked ? <i className="bi bi-heart-fill text-danger m-1" onClick={toggleLikeHandler}></i> : <i className="bi bi-heart m-1" onClick={toggleLikeHandler}></i>}
                {tuit.likes}
            </div>
            <div className="col-3" align="center">
            <i className="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;