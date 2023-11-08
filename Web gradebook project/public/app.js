

function del(elem,num) {
    const myObjectString2 = localStorage.getItem('objectGreeting');
    const myObject2 = JSON.parse(myObjectString2);
    var name=document.getElementById('name_course'+num+'');
    var db = firebase.firestore();

    var coure= db.collection("Students").doc(myObject2);
    coure.update({
        [name.value]: firebase.firestore.FieldValue.delete()
    });

    document.getElementById('year'+num+'').value = 'Year';
    document.getElementById('semester'+num+'').value = 'Semester';
    document.getElementById('name_course'+num+'').value = 'Name course';
    document.getElementById('credits'+num+'').value = '';
    document.getElementById('grade'+num+'').value = '';
}


function login() {
    window.location.assign("loginPage.html");
};

function home() {
    window.location.assign("index.html");
};

function about() {
    window.location.assign("aboutPage.html");
};

function logout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      window.location.assign("loginPage.html");
};


function signUp() {
    //const auth = firebase.auth();
    var user_email = document.getElementById("user_email").value;
    var user_psw = document.getElementById("user_psw").value;
    var user_name = document.getElementById("user_name").value;	

    firebase.auth().createUserWithEmailAndPassword(user_email, user_psw).then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        const db = firebase.firestore();
        db.collection("Students").doc(user_email).set({
          Name: user_name,
          Email:user_email,
          Password:user_psw,
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }); 
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);

        // ..
    });

};


function signIn() { 
    //const auth = firebase.auth();
    var user_email = document.getElementById("login_email").value;
    var user_psw = document.getElementById("login_psw").value;
    const myObjectString = JSON.stringify(user_email);
    localStorage.setItem('objectGreeting', myObjectString);
    var db = firebase.firestore();
	
    firebase.auth().signInWithEmailAndPassword(user_email, user_psw).then(async (userCredential) => {
        // Signed up
        var user = userCredential.user;
        window.location.assign("main.html");

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);

        // ..
    });

};


function savee() {
   const myObjectString2 = localStorage.getItem('objectGreeting');
    const myObject2 = JSON.parse(myObjectString2);
    var db = firebase.firestore();
    var docRef = db.collection("Students").doc(myObject2);
    var id0 = document.getElementById("name_course0").value;
    var id1 = document.getElementById("name_course1").value;
    var id2 = document.getElementById("name_course2").value;
    var id3 = document.getElementById("name_course3").value;
    var id4 = document.getElementById("name_course4").value;
    var id5 = document.getElementById("name_course5").value;
    var id6 = document.getElementById("name_course6").value;
    var id7 = document.getElementById("name_course7").value;
    var id8 = document.getElementById("name_course8").value;
    var id9 = document.getElementById("name_course9").value;
    calculator();

    return docRef.update({
    [id0]:{Year: document.getElementById("year0").value,
    Semester:document.getElementById("semester0").value,
    NameCourse:document.getElementById("name_course0").value,
    Credits:document.getElementById("credits0").value, 
    Grade: document.getElementById("grade0").value},
    [id1]:{Year: document.getElementById("year1").value,
    Semester:document.getElementById("semester1").value,
    NameCourse:document.getElementById("name_course1").value,
    Credits:document.getElementById("credits1").value, 
    Grade: document.getElementById("grade1").value},
    [id2]:{Year: document.getElementById("year2").value,
    Semester:document.getElementById("semester2").value,
    NameCourse:document.getElementById("name_course2").value,
    Credits:document.getElementById("credits2").value, 
    Grade: document.getElementById("grade2").value},
    [id3]:{Year: document.getElementById("year3").value,
    Semester:document.getElementById("semester3").value,
    NameCourse:document.getElementById("name_course3").value,
    Credits:document.getElementById("credits3").value, 
    Grade: document.getElementById("grade3").value},
    [id4]:{Year: document.getElementById("year4").value,
    Semester:document.getElementById("semester4").value,
    NameCourse:document.getElementById("name_course4").value,
    Credits:document.getElementById("credits4").value, 
    Grade: document.getElementById("grade4").value},
    [id5]:{Year: document.getElementById("year5").value,
    Semester:document.getElementById("semester5").value,
    NameCourse:document.getElementById("name_course5").value,
    Credits:document.getElementById("credits5").value, 
    Grade: document.getElementById("grade5").value},    
    [id6]:{Year: document.getElementById("year6").value,
    Semester:document.getElementById("semester6").value,
    NameCourse:document.getElementById("name_course6").value,
    Credits:document.getElementById("credits6").value, 
    Grade: document.getElementById("grade6").value},    
    [id7]:{Year: document.getElementById("year7").value,
    Semester:document.getElementById("semester7").value,
    NameCourse:document.getElementById("name_course7").value,
    Credits:document.getElementById("credits7").value, 
    Grade: document.getElementById("grade7").value},   
    [id8]:{Year: document.getElementById("year8").value,
    Semester:document.getElementById("semester8").value,
    NameCourse:document.getElementById("name_course8").value,
    Credits:document.getElementById("credits8").value, 
    Grade: document.getElementById("grade8").value},
    [id9]:{Year: document.getElementById("year9").value,
    Semester:document.getElementById("semester9").value,
    NameCourse:document.getElementById("name_course9").value,
    Credits:document.getElementById("credits9").value, 
    Grade: document.getElementById("grade9").value},
    "Name course": firebase.firestore.FieldValue.delete()
    })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    
};

function calculator() {
    var allAverages=0;
    var allCredits=0;

    for (i=0 ; i<10 ; i++){
        var credits = Number(document.getElementById('credits'+i+'').value);
        allCredits += credits;
        var grade = Number(document.getElementById('grade'+i+'').value);
        var res = credits*grade;
        allAverages += res;
    }
    
    document.getElementById("result").innerHTML = (allAverages/allCredits).toFixed(2);
};

