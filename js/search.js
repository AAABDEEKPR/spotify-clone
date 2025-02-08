let searchNav = document.getElementById("searchNav");
let searchInput = document.getElementById("searchInput");


searchNav.addEventListener("click", () => {
    searchInput.style.display = searchInput.style.display === "none" ? "block" : "none";
    searchInput.focus();  
});


searchInput.addEventListener("input", () => {
    let searchQuery = searchInput.value.toLowerCase();
    
    // Select all playlist cards
    let cards = document.querySelectorAll('.card');
    let noResultsMessage = document.getElementById("noResultsMessage");
    let visibleCards = 0;

    //card filter
    cards.forEach(card => {
        let cardTitle = card.querySelector('h2').textContent.toLowerCase();
        let cardDescription = card.querySelector('p').textContent.toLowerCase();

        // If the search query matches the title or description, show the card; otherwise, hide it
        if (cardTitle.includes(searchQuery) || cardDescription.includes(searchQuery)) {
            card.style.display = 'block';
            visibleCards++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide the "No results" message
    if (visibleCards === 0 && searchQuery !== "") {
        if (!noResultsMessage) {
            const messageContainer = document.createElement("div");
            messageContainer.id = "noResultsMessageContainer";
            messageContainer.style.display = "flex";
            messageContainer.style.justifyContent = "center";
            messageContainer.style.alignItems = "center";
            messageContainer.style.position = "absolute";
            messageContainer.style.top = "50%";
            messageContainer.style.left = "55%";
            messageContainer.style.transform = "translate(-50%, -50%)";
            messageContainer.style.width = "100%";

            const message = document.createElement("div");
            message.id = "noResultsMessage";
            message.innerText = "Sorry, this song is not available";
            message.style.fontWeight = "bold";
            message.style.color = "#fff";
            message.style.padding = "20px";
            messageContainer.appendChild(message);

            document.body.appendChild(messageContainer);
        }
    } else if (noResultsMessage) {
        noResultsMessage.remove(); 
        document.getElementById("noResultsMessageContainer").remove(); 
    }
});
