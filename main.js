let isWhiteTurn = true;
let seconds = 600;

// Update the count down every 1 second
var x = setInterval(function () {
    seconds = seconds - 1;
    // seconds--;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var sec = seconds % 60;

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + sec + "s ";
}, 1000);

function reset() {
    seconds = 601;
}
let overlappedEl;

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (overlappedEl.tagName === "IMG") {
        ev.target.parentElement.appendChild(document.getElementById(data));
        overlappedEl.remove();

        if (ev.target.id === "E-1") {
            console.log('You lose');

            let bKing = document.getElementById("E-1")
            let wKing = document.getElementById("E-8")
            let Model = document.getElementById("myModal")
            Model.style.display = "block";
        }
        if (ev.target.id === "E-8") {
            console.log('You lose');

            let wKing = document.getElementById("E-8")
            let Model = document.getElementById("myModal")
            Model.style.display = "block";
        }
    } else {
        ev.target.appendChild(document.getElementById(data));
    }
}


function allowDrop(ev) {
    ev.preventDefault();
    overlappedEl = ev.target;
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

var clicks = 0;
var clicks1 = 0;

function onBlackWins() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function onWhiteWins() {
    clicks1 += 1;
    document.getElementById("clicks1").innerHTML = clicks1;
}

let placeHolder = document.getElementById("saver")
let action = document.querySelector("same div drop ")
function save() {
    if (action === "drag and drop in the same place") {
        placeHolder.innerText = previous.place
    }
}

function selectedTeam(selectedIndex) {
    console.log(selectedIndex)
    if (selectedIndex === 0) {
        document.getElementById('A-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/1920px-Chess_rdt45.svg.png"
        document.getElementById('B-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/1920px-Chess_ndt45.svg.png"
        document.getElementById('C-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/1920px-Chess_bdt45.svg.png"
        document.getElementById('D-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/1920px-Chess_qdt45.svg.png"
        document.getElementById('E-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/1920px-Chess_kdt45.svg.png"
        document.getElementById('F-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/1920px-Chess_bdt45.svg.png"
        document.getElementById('G-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/1920px-Chess_ndt45.svg.png"
        document.getElementById('H-1').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/1920px-Chess_rdt45.svg.png"

        document.getElementById('A-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('B-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('C-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('D-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('E-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('F-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('G-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"
        document.getElementById('H-2').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1920px-Chess_pdt45.svg.png"



        document.getElementById('A-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('B-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('C-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('D-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('E-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('F-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('G-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"
        document.getElementById('H-7').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/1920px-Chess_plt45.svg.png"

        document.getElementById('A-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/1920px-Chess_rlt45.svg.png"
        document.getElementById('B-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/1920px-Chess_nlt45.svg.png"
        document.getElementById('C-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/1920px-Chess_blt45.svg.png"
        document.getElementById('D-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/1920px-Chess_qlt45.svg.png"
        document.getElementById('E-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/1920px-Chess_klt45.svg.png"
        document.getElementById('F-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/1920px-Chess_blt45.svg.png"
        document.getElementById('G-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/1920px-Chess_nlt45.svg.png"
        document.getElementById('H-8').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/1920px-Chess_rlt45.svg.png"
    }

    if (selectedIndex === 1) {
        document.getElementById('A-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/br.png"
        document.getElementById('B-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bn.png"
        document.getElementById('C-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bb.png"
        document.getElementById('D-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bq.png"
        document.getElementById('E-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bk.png"
        document.getElementById('F-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bb.png"
        document.getElementById('G-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bn.png"
        document.getElementById('H-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/br.png"

        document.getElementById('A-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('B-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('C-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('D-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('E-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('F-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('G-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"
        document.getElementById('H-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/bp.png"



        document.getElementById('A-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('B-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('C-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('D-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('E-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('F-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('G-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"
        document.getElementById('H-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wp.png"

        document.getElementById('A-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wr.png"
        document.getElementById('B-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wn.png"
        document.getElementById('C-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wb.png"
        document.getElementById('D-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wq.png"
        document.getElementById('E-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wk.png"
        document.getElementById('F-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wb.png"
        document.getElementById('G-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wn.png"
        document.getElementById('H-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/3d_staunton/150/wr.png"
    }

    if (selectedIndex === 2) {
        document.getElementById('A-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/br.png"
        document.getElementById('B-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bn.png"
        document.getElementById('C-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bb.png"
        document.getElementById('D-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bq.png"
        document.getElementById('E-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bk.png"
        document.getElementById('F-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bb.png"
        document.getElementById('G-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bn.png"
        document.getElementById('H-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/br.png"

        document.getElementById('A-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('B-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('C-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('D-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('E-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('F-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('G-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"
        document.getElementById('H-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/bp.png"



        document.getElementById('A-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('B-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('C-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('D-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('E-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('F-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('G-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"
        document.getElementById('H-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wp.png"

        document.getElementById('A-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wr.png"
        document.getElementById('B-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wn.png"
        document.getElementById('C-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wb.png"
        document.getElementById('D-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wq.png"
        document.getElementById('E-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wk.png"
        document.getElementById('F-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wb.png"
        document.getElementById('G-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wn.png"
        document.getElementById('H-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/newspaper/150/wr.png"
    }

    if (selectedIndex === 3) {
        document.getElementById('A-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/br.png"
        document.getElementById('B-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bn.png"
        document.getElementById('C-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bb.png"
        document.getElementById('D-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bq.png"
        document.getElementById('E-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bk.png"
        document.getElementById('F-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bb.png"
        document.getElementById('G-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bn.png"
        document.getElementById('H-1').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/br.png"

        document.getElementById('A-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('B-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('C-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('D-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('E-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('F-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('G-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"
        document.getElementById('H-2').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/bp.png"



        document.getElementById('A-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('B-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('C-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('D-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('E-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('F-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('G-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"
        document.getElementById('H-7').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wp.png"

        document.getElementById('A-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wr.png"
        document.getElementById('B-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wn.png"
        document.getElementById('C-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wb.png"
        document.getElementById('D-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wq.png"
        document.getElementById('E-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wk.png"
        document.getElementById('F-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wb.png"
        document.getElementById('G-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wn.png"
        document.getElementById('H-8').src = "https://images.chesscomfiles.com/chess-themes/pieces/light/150/wr.png"
    }

}
let wKing = document.getElementById("E-1")
let Model = document.getElementById("myModel")

// wKing.onchange = function () {
//     Model.style.display = "block";
// }
span.onclick = function() {
    Model.style.display = "none";
  }
  
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      Model.style.display = "none";
    }
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];