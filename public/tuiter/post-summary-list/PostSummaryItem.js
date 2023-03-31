// who refers to the handle of the user since all handles are unique.
const PostSummaryItem = (post) => {
    var tweetCount;
    if (post.tweets === undefined) {
        tweetCount = "";
    } else {
        tweetCount = post.tweets + " Tweets";
    }


    return(`
    <div class="col-12 border border-secondary border-top-0 bg-light form-inline align-middle justify-content-between">
                <div class="col-9 form-inline align-middle">
                    <div>

                        <!--topic-->
                        <div class="text-secondary">${post.topic}</div>

                        <!--userName-->
                        <div><span class="text-white font-weight-bold">${post.userName}</span>
                        <i class="fa fa-solid fa-check-circle ml-1"></i>
                        
                        <!--time-->
                        <span class="text-secondary ml-2">- ${post.time}</span></div>

                        <!--title-->
                        <div><span class="text-white font-weight-bold">${post.title}</span></div>
                        
                        <!--tweets-->
                        <div class="text-secondary">${tweetCount}</div>
                    </div>
                </div>

                        <!--image-->
                <div class="container col-3"><img src="${post.image}" class="m-3" height="100" max-width="100"/></div>
            </div>
    `);
   }
   export default PostSummaryItem;

