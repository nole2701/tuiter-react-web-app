const NavigationSidebar = () => { //html
    return(`
        <div class="border border-secondary border-bottom-0 rounded-top bg-light form-inline">
            <span class="form-inline"><i class="fab fa-twitter p-1 align-middle"></i><span class="ml-1 d-none d-xl-block  align-middle"></span></div>
        <div class="border border-secondary border-bottom-0 bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-home p-1"></i> <span class="ml-1 d-none d-xl-block align-middle">Home</span></span></div>
        <div class="border border-secondary border-bottom-0 bg-primary form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-hashtag fa-inverse p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle text-white">Explore</span></span></div>
        <div class="border border-secondary border-bottom-0 bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-bell p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle">Notifications</span></span></div>
        <div class="border border-secondary border-bottom-0 bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-envelope p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle">Messages</span></span></div>
        <div class="border border-secondary border-bottom-0 bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-bookmark p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle">Bookmarks</span></span></div>
        <div class="border border-secondary border-bottom-0 bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-list p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle">Lists</span></span></div>
        <div class="border border-secondary border-bottom-0 bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-user p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle">Profile</span></span></div>
        <div class="border border-secondary rounded-bottom bg-light form-inline">
            <span class="form-inline"><i class="fa fa-solid fa-minus-circle p-1"></i> <span class="ml-1 d-none d-xl-block  align-middle">More</span></span></div>
        <div class="border border-secondary bg-primary form-inline rounded-pill mt-2 justify-content-md-center">
            <span class="ml-1 text-center align-middle text-white">Tweet</span></div>
    `);
   }
   export default NavigationSidebar;

$('#navigation-sidebar').append(`
    ${NavigationSidebar()}
`);