import PostSummaryList from "../post-summary-list/index.js";

const ExploreComponent = () => {
    return(`
                <div class="row m-2 justify-content-between">
                    <div class="row col-11 align-middle container position-relative">
                        <input type="text" class="form-control rounded-pill" placeholder="      Search Tuiter">
                        <i class="col-1 position-absolute top-50 start-0 translate-middle-y fa fa-solid fa-search ml-3"></i>
                    </div>
                    <div class="col-1 form-inline align-top">
                        <div class="font-weight-bold"><i class="mx-2 fa fa-2x fa-solid fa-cog text-primary col-1"></i></div>
                    </div>
                </div>
           <ul class="col-12 nav nav-tabs border-bottom border-secondary m-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative container mb-3">
                <img src="../images/spacex-starship.png" height=100% width=100%/>
                <h2 class="position-absolute bottom-0 start-5 ml-2 text-secondary font-weight-bold">SpaceX's Starship</h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
