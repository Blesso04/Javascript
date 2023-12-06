// function checkResults() {
//     if( way.value !=""){
//         if (way.value >= 0 && num.value < 40){
//             console.log("F");
//         }
//     }
// }
var song = "Audio/02. Cardi B - Money - (SongsLover.com).mp3"
var songToPlay= new Audio(song)

   


function checkScore() {
    if (way.value != ""){
       if (way.value >=0 && way.value <40){
        console.log("F")
        show.innerHTML="F"
        songToPlay.play()
       }
       else if(way.value >=40 && way.value < 45){
        console.log("E")
        show.innerHTML="E"
        songToPlay.play()
       }
       else if(way.value >=45 && way.value < 50){
        console.log("D")
       }
    } else{
        alert("please fill out this field")
}
}