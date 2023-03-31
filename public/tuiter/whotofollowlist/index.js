import WhoToFollowListItem from "./WhoToFollowListItem.js"
import whos from "./whos.js"

const WhoToFollowList = () => { //html
    return(`
    <ul class="list-group border border-secondary rounded">
        <div class="col-12 bg-light form-inline align-middle">
            <h5>Who to Follow</h5></div>
        ${
            whos.map(who => {
                return(WhoToFollowListItem(who));
            }).join("")
        }
    </ul>
    `)
}
export default WhoToFollowList;

$('#who-to-follow').append(`
    ${WhoToFollowList()}
`);