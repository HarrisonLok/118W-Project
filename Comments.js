const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey)
    {
      var newPost = snapshot.val(); 
    });
function send()
{ 
     
    var FeedBack = document.getElementById("Feedback").value; 
   
    detailsRef.push().set({ 
        
        FeedBack: FeedBack, 
        });
}