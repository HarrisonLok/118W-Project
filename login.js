const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function (snapshot, prevChildKey) {
    var newPost = snapshot.val();
});
function send() {
    var Email-reg = document.getElementById("Email-reg").value;
    var Password-reg = document.getElementById("Password-reg").value;
    var Password2-reg = document.getElementById("Password2-reg").value;
    var Phone-reg = document.getElementById("Phone-reg").value;

    detailsRef.push().set({
        Email- reg: Email - reg,
        Password - reg: Password - reg,
        Password2 - reg: Password2 - reg,
        Phone - reg: Phone - reg,
 });
}