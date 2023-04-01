import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));}

 return(
  <li className="list-group-item">
   <div className="row mb-1">
    <div className="col-1">
       <img width={40} className="float-left rounded-circle" src={require(`../../images/${tuit.image}`)} alt=""/>
    </div>
    <div className="col-10">
    <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
       <div><span className="fw-bold">{tuit.userName}</span>
       <i className="bi bi-patch-check-fill text-primary m-1"></i> {tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div>
    </div>
   </div>
   <TuitStats
            key={tuit._id}
            tuit={tuit}/>
  </li>
 );
};
export default TuitItem;