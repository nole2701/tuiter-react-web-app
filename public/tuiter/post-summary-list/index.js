import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => { //html
    return(`
    <ul class="list-group border border-secondary rounded">
        ${
            posts.map(post => {
                return(PostSummaryItem(post));
            }).join("")
        }
    </ul>
    `)
}
export default PostSummaryList;

$('#post-summary-list').append(`
    ${PostSummaryList()}
`);