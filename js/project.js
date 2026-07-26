document.addEventListener("DOMContentLoaded", () => {

    initializeEmailPopup();
    initializeBlogSearch();

});

/*JS Code for Email Popup*/
function initializeEmailPopup() {
    const emailLink = document.getElementById("email-link");

    if (emailLink) {

        const popup = document.getElementById("email-popup");
        const closeBtn = document.getElementById("close-popup");
        const copyBtn = document.getElementById("copy-email");
        const email = document.getElementById("email-address").textContent;

        emailLink.addEventListener("click", () => {
            setTimeout(() => {
                popup.classList.add("show");
            }, 500);
        });

        closeBtn.addEventListener("click", () => {
            popup.classList.remove("show");
            copyBtn.textContent = "Copy Email Address";
        });

        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(email)
                .then(() => {
                    copyBtn.textContent = "Copied!";
                });
        });
}}

/*JS Code for Blog Search Bar*/
function initializeBlogSearch(){
    const searchBar = document.getElementById("searchBar");
    const posts = document.querySelectorAll(".blog-post");

    if(searchBar){
        searchBar.addEventListener("keyup", function () {

        const searchText = searchBar.value.toLowerCase();

        posts.forEach(post => {

            const text = post.textContent.toLowerCase();

            /*if(text.includes(searchText)){
                post.style.display = "";
            }
            else{
                post.style.display = "none";
            }*/
            if (text.includes(searchText)) {

                // Show the post
                post.style.display = "";

                // Wait one frame so the browser registers the display change
                requestAnimationFrame(() => {
                    post.classList.remove("hidden");
                });

            } else {

                // Fade it out
                post.classList.add("hidden");

                // After the fade finishes, remove it from the layout
                setTimeout(() => {
                    if (post.classList.contains("hidden")) {
                        post.style.display = "none";
                    }
                }, 300); // 300ms matches the CSS transition
            }

            });
    });
}};