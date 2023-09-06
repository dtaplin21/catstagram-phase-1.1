const catButton = () => {
    const button = document.createElement("button");
    button.id = "new-cat";
button.innerText = "New Cat";
button.addEventListener("click", fetchImage);
return button;
}

 export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";
    fetchImage();
    const newCatButton = catButton();
    const voting = createVote()
    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.append(newCatButton)
    container.appendChild(img);
    container.appendChild(voting)


};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

function createVote() {
    const buttonDiv = document.createElement("div");
    const upVoteButton = document.createElement("button");
    upVoteButton.id = "up-vote"
    upVoteButton.innerText = "Up Vote";
    upVoteButton.addEventListener("click", vote)

    const downVoteButton = document.createElement("button");
     downVoteButton.id = "down-vote"
     downVoteButton.innerText = "down Vote";
     downVoteButton.addEventListener("click", vote)

     buttonDiv.appendChild(upVoteButton)
 buttonDiv.appendChild(downVoteButton)
 return buttonDiv
}

function vote() {

}
