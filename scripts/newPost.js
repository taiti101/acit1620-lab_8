/** COMPLETE THIS PART */
async function addPost(post) {
    try {
        // 1. Get the list of posts from local storage
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        // 2. Add the new post at the front of the list
        posts.unshift(post);

        // 3. Save the updated list of posts back to local storage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Optionally, you may want to display the newly added post immediately
        displayPosts([post], null);
    } catch (error) {
        console.error('Error adding post:', error.message);
    }
}


document.querySelector('#new-post').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    addPost({title, body});
    e.target.reset();
});