let submitBtn = document.getElementById('submitBtn');
let mainText = document.getElementById('mainText');
let firebaseRef = firebase.database().ref();
let count = 0;

// when clicking the kinds of interest, the choice is uploaded to the database
function submitClick(user_interest) {
    count += 1;
    window.alert("Filter has been updated!!");
    firebaseRef.child('User').child('Filter').child('Interest').child(user_interest).set(count);
}