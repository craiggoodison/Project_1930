let submitBtn = document.getElementById('submitBtn');
let mainText = document.getElementById('mainText');
let firebaseRef = firebase.database().ref();
let count = 0;
// let fireHeading = document.getElementById('fireHeading');
// let firebaseHeadingRef = firebase.database().ref().child('Heading');

// firebaseHeadingRef.on('value', function(datasnapshot){
//     fireHeading.innerText = datasnapshot.val();
// }); 
// -> connect to Firebase 'Heading' 

function submitClick(user_interest) {
    count += 1;
    //let firebaseRef = firebase.database().ref().child('User').child('Filter').child('Interest');
    // let messageText = mainText.value;

    window.alert("Filter has been updated!!");
    firebaseRef.child('User').child('Filter').child('Interest').child(user_interest).set(count);

    //firebaseRef.child('Text').set('Hello'); Key: 'Text' Value: 'Hello'
    //firebaseRef.push().set(messageText); -> random Key
}