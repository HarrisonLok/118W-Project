const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
 var newPost = snapshot.val();
});
function send(){
 var name = document.getElementById("cname").value;
 var creditCardNum = document.getElementById("ccnum").value;
 var expMonth = document.getElementById("expmonth").value;
 var expYear = document.getElementById("expYear").value;
 var cvv = document.getElementById("cvv").value;
 
 detailsRef.push().set({
 cname: cname,
 ccnum: ccnum,
 expMonth:expMonth,
 expYear: expYear,
 cvv: cvv,
 });
}
