
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBrwmW9a6VaHzBblO_covtGpHZvuZlKhd0',
    authDomain: 'coconutfofo-b9185.firebaseapp.com',
    projectId: 'coconutfofo-b9185'
});

var db = firebase.firestore();

function random() {
    // var random = Math.ceil(Math.random() * 4);

    db.collection('okazu').get().then(snap => {
        size = snap.size
        var random = Math.ceil(Math.random() * size);

        // firebase
        var docRef = db.collection("okazu").doc(String(random));

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());

                var demension = "";

                if (doc.data().type == 2) {
                    demension = "2次元"
                }
                else if (doc.data().type == 3) {
                    demension = "3次元"
                } else {
                    demension = "その他"
                }
                document.getElementById("title").innerHTML = "↓本日のおすすめはこちら↓"
                document.getElementById("name").innerHTML = "名前：" + doc.data().name;
                document.getElementById("type").innerHTML = "タイプ：" + demension;
                document.getElementById("recommended").innerHTML = "おススメ度：" + doc.data().recommended;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                document.getElementById("title").innerHTML = ""
                document.getElementById("name").innerHTML = "今日は見つかりませんでした…";
                document.getElementById("type").innerHTML = "";
                document.getElementById("recommended").innerHTML = "";
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    });
}

document.getElementById("subForm").style.visibility = "hidden";

function subm() {
    const form = document.getElementById("subForm");

    if (form.style.visibility == "visible") {
        // hiddenで非表示
        form.style.visibility = "hidden";
    } else {
        // visibleで表示
        form.style.visibility = "visible";
    }
}

// 検索部分

function search() {

    var word = document.getElementById("Kword")
    







}