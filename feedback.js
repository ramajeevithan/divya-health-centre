function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);

    document.getElementById('user-info').innerHTML = `
        <img src="${responsePayload.picture}" alt="User Profile">
        <p>${responsePayload.email}</p>
    `;

    document.getElementById('user-email').value = responsePayload.email;
    document.getElementById('user-profile-pic').value = responsePayload.picture;

    document.getElementById('feedback-form').style.display = 'block';
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        var selectedRating = document.querySelector('input[name="rating"]:checked');
        if (selectedRating) {
            console.log("Selected rating:", selectedRating.value);
        } else {
            console.log("No rating selected");
            event.preventDefault(); // Prevent form submission if no rating is selected
            alert("Please select a rating before submitting.");
        }
    });
});