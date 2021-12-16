// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBrwmW9a6VaHzBblO_covtGpHZvuZlKhd0',
    authDomain: 'coconutfofo-b9185.firebaseapp.com',
    projectId: 'coconutfofo-b9185'
});

var db = firebase.firestore();

getText = document.location.search;

var url = new URL(window.location.href);
console.log(url);

var params = url.searchParams;
console.log(params.get('chaName'));
console.log(params.get('type'));
console.log(params.get('osusume'));

console.log(decodeURI(getText));

var chaName = params.get('chaName');
var type = params.get('type');
var osusme = params.get('osusume');

// 登録
db.collection('okazu').get().then(snap => {
    size = snap.size
    console.log(size)
    // レコード数プラス１
    db.collection("okazu").doc(String(size + 1)).set({
        name: chaName,
        recommended: osusme,
        type: type
    })
        .then((docRef) => {
            console.log("登録に成功しました。");
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
 });
