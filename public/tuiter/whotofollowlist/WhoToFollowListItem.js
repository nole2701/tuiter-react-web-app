// who refers to the handle of the user since all handles are unique.
const WhoToFollowListItem = (who) => { //html
    return(`
    <div class="col-12 border-top border-secondary bg-light form-inline align-middle justify-content-between">
        <div class="form-inline align-middle">
            <div><img src="${who.avatarIcon}" class="rounded-circle m-1 mr-3" height="48" width="48"/></div>
            <div>
                <div class="font-weight-bold">${who.userName}<i class="fa fa-solid fa-check-circle ml-1"></i></div>
                <div>${who.handle}</div>
            </div>
        </div>
        <div class="border border-secondary  bg-primary form-inline rounded-pill justify-content-md-center">
            <span class="py-1 px-2 text-center align-middle text-white">Follow</span></div>
    </div>
    `);
   }
   export default WhoToFollowListItem;

