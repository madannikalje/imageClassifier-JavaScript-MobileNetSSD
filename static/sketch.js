var img;
var predImg;
var predImgurl;

let model = ml5.imageClassifier("MobileNet", onReady);

function loadxyz() {
    let img = document.getElementById("img");
    if (img.files.length == 0) {
        alert("Enter File First")
    } else {
        let file = img.files[0];
        let preView = document.getElementById("preView");
        const objectURL = URL.createObjectURL(file)
        console.log(objectURL)
        preView.setAttribute('src', objectURL)
        predImg = preView;
        console.log(predImg)
        console.log("!!!!!!!!!!!!!" + preView.height)
        console.log("!!!!!!!!!!!!!" + preView.width)
    }

}

function onReady() {
    console.log("modelReady!!!!!")
    return true
}


function pred() {
    if (predImg) {
        if (onReady()) {
            model.predict(predImg).then((p) => {
                console.log(p)
                console.log(p[0])
                console.log(p[0]['label'])
                console.log(p[0]['confidence'])
                document.getElementById("ob").innerHTML = p[0]['label'];
                document.getElementById("conf").innerHTML = (p[0]['confidence'] * 100) + "% Sure";

            })
        } else {
            alert("Model Not Loaded yet")
        }
    } else {
        alert("Enter File First")
    }
}