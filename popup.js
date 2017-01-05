(function startYoutubeAnonymous() {
    console.log("Using Youtube Anonymously");

    var shouldHideVideo   = true,
        shouldHideSidebar = true,
        shouldHideTitle   = true,
        $items            = $("#watch-header, .logo");

    if(shouldHideVideo) {
        $items = $items.add($(".video-stream"));
    }
    if(shouldHideSidebar) {
        $items = $items.add($("#watch7-sidebar-modules"));
    }
    if(shouldHideTitle) {
        $items = $items.add($(".watch-title"));
    }

    $("title").text("Google's Youtube");

    $items.remove();
})(); 

