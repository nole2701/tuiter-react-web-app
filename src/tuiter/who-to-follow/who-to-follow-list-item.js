import React from "react";

const WhoToFollowListItem = ({who}) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={require(`../../images/${who.avatarIcon}`)} alt=''/>

     </div>
     <div className="col-8">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;

// // who refers to the handle of the user since all handles are unique.
// const WhoToFollowListItem = (who) => {
//     return(
//     <div className="col-12 border-top border-secondary bg-light form-inline align-middle justify-content-between">
//         <div className="form-inline align-middle">
//             <div><img src="{who.avatarIcon}" className="rounded-circle m-1 mr-3" height="48" width="48"/></div>
//             <div>
//                 <div className="font-weight-bold">{who.userName}<i className="fa fa-solid fa-check-circle ml-1"></i></div>
//                 <div>{who.handle}</div>
//             </div>
//         </div>
//         <div className="border border-secondary  bg-primary form-inline rounded-pill justify-content-md-center">
//             <span className="py-1 px-2 text-center align-middle text-white">Follow</span></div>
//     </div>
//     );
//    }
//    export default WhoToFollowListItem;

