/*---------------------  ENCRYPT FUNCTION ---------------------*/
function Encrypt() {
    let raw_input = document.getElementById("input-box").value.toLowerCase();
    let arr_input = raw_input.split('');
    let final_txt = '';

    for (let i = 0; i < arr_input.length; i++) {
        switch (arr_input[i]) {
            case 'a':
                arr_input[i] = "022";
                break;
            case 'b':
                arr_input[i] = "076";
                break;
            case 'c':
                arr_input[i] = "099";
                break;
            case 'd':
                arr_input[i] = "012";
                break;
            case 'e':
                arr_input[i] = "043";
                break;
            case 'f':
                arr_input[i] = "098";
                break;
            case 'g':
                arr_input[i] = "024";
                break;
            case 'h':
                arr_input[i] = "034";
                break;
            case 'i':
                arr_input[i] = "066";
                break;
            case 'j':
                arr_input[i] = "045";
                break;
            case 'k':
                arr_input[i] = "054";
                break;
            case 'l':
                arr_input[i] = "084";
                break;
            case 'm':
                arr_input[i] = "033";
                break;
            case 'n':
                arr_input[i] = "021";
                break;
            case 'o':
                arr_input[i] = "089";
                break;
            case 'p':
                arr_input[i] = "029";
                break;
            case 'q':
                arr_input[i] = "038";
                break;
            case 'r':
                arr_input[i] = "056";
                break;
            case 's':
                arr_input[i] = "023";
                break;
            case 't':
                arr_input[i] = "065";
                break;
            case 'u':
                arr_input[i] = "041";
                break;
            case 'v':
                arr_input[i] = "074";
                break;
            case 'w':
                arr_input[i] = "077";
                break;
            case 'x':
                arr_input[i] = "039";
                break;
            case 'y':
                arr_input[i] = "026";
                break;
            case 'z':
                arr_input[i] = "010";
                break;

            default:
                break;
        }
    }

    final_txt = arr_input.join('');
    document.getElementById("encrypted-final-txt").textContent = final_txt;
}

/*---------------------------------- DESENCRYPT FUNCTION ------------------- */
function Desencrypt() {
    let raw_input = document.getElementById("input-box").value.toLowerCase();
    let arr_input = raw_input.split('');
    let final_txt = '';

    //final_txt = raw_input.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    final_txt = raw_input.replace(/022/g, "a")
                             .replace(/076/g, "b")
                             .replace(/099/g, "c")
                             .replace(/012/g, "d")
                             .replace(/043/g, "e")
                             .replace(/098/g, "f")
                             .replace(/024/g, "g")
                             .replace(/034/g, "h")
                             .replace(/066/g, "i")
                             .replace(/045/g, "j")
                             .replace(/054/g, "k")
                             .replace(/084/g, "l")
                             .replace(/033/g, "m")
                             .replace(/021/g, "n")
                             .replace(/089/g, "o")
                             .replace(/029/g, "p")
                             .replace(/038/g, "q")
                             .replace(/056/g, "r")
                             .replace(/023/g, "s")
                             .replace(/065/g, "t")
                             .replace(/041/g, "u")
                             .replace(/074/g, "v")
                             .replace(/077/g, "w")
                             .replace(/039/g, "x")
                             .replace(/026/g, "y")
                             .replace(/010/g, "z");

    document.getElementById("encrypted-final-txt").textContent = final_txt;

}


// HIDE FUNCTION
function HideBox() {
    document.getElementById("error-box").style.display = "none";
}

// SHOW FUNCTION

function ShowBox() {
    document.getElementById("encrypted-txt").style.display = "block";
}


//COPY FUNCTION
function Copy() {
    let content = document.getElementById("encrypted-final-txt");

    content.select();
    document.execCommand("copy");
}

//ERROR FUNCTION
function EmptyInput() {
    let content = document.getElementById("input-box").value;

    if (content == 0) {
        document.getElementById("error-box").style.display = "block";
        document.getElementById('encrypted-txt').style.display = 'none';
    }
}

//CLEAR FUNCTION
function clearInput() {
    document.getElementById("input-box").value = "";
  }




//EASTER EGG

let easterEgg = "\u28FF\u28FF\u28FF\u28FF\u28C7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2809\u281B\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28E4\u28C4\u2840\u2800\u28BB\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28C7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2838\u28FF\u28FF\u28FF\u2803\u28B0\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28C6\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28FC\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2846\u2800\u2800\u2800\u2800\u2800\u2800\u28B6\u28F6\u28F6\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E7\u2800\u28A0\u2840\u2810\u2800\u2800\u2800\u283B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2844\u28B8\u28F7\u2844\u2800\u2823\u28C4\u2840\u2800\u2809\u281B\u28BF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28C7\u2800\u28FF\u28FF\u28E6\u2800\u2839\u28FF\u28F7\u28F6\u28E6\u28FC\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FC\u28FF\u28FF\u28FF\u28F7\u28C4\u28F8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u287F\u289B\u2859\u28BB\u281B\u28C9\u28BB\u28C9\u2888\u28F9\u28FF\u28FF\u281F\u28C9\u28BB\u284F\u289B\u2819\u28C9\u28BB\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28C7\u283B\u2803\u28FE\u2838\u281F\u28F8\u28FF\u2808\u28FF\u28FF\u28FF\u2840\u2834\u281E\u2847\u28FE\u2844\u28FF\u2818\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28DF\u281B\u28C3\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF";
let easterEggText = "    Hello thanks for being here!!!!";
console.log(easterEgg + easterEggText);