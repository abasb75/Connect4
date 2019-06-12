//------------------



var xh;

var gbArray;

var username = "i have no name";

//Selec tdeficulty of game
var defficulty = 5;
var matlen = 7;
var algoritm = 200;

var v = false;
//StartView
var startWithAllahHelp = document.getElementById("startWithAllahHelp");
var time = window.setTimeout(function () {
    document.getElementById("body_page").innerHTML = "<div id=\"LoadPage\">\n" +
        "        <div id=\"LoadPageSelection\">\n" +
        "            <div id=\"guideTextinloadpagesellection\">برای شروع بازی درجه سختی را انتخاب کنید.</div>\n" +
        "            <label id=\"getusernameLabel\" for=\"getusername\">your name</label>\n" +
        "            <div id=\"getusernameDiv\"><input type=\"text\" id=\"getusername\"></div>\n" +
        "            <button type=\"button\" id=\"startButton\" onclick=\"startgame()\">Start game</button>\n" +
        "            <label id=\"selectdificultyLabel\">select dificulty level</label>\n" +
        "            <div id=\"selectdificulty\">\n" +
        "                <span class=\"1 sp1\" onclick=\"changeDeficulty(1)\">1</span>\n" +
        "                <span class=\"2 sp1\" onclick=\"changeDeficulty(2)\">2</span>\n" +
        "                <span class=\"3 sp1\" onclick=\"changeDeficulty(3)\">3</span>\n" +
        "                <span class=\"4 sp1\" onclick=\"changeDeficulty(4)\">4</span>\n" +
        "                <span class=\"5 sp1 selectedspan\" onclick=\"changeDeficulty(5)\">5</span>\n" +
        "                <span class=\"6 sp1\" onclick=\"changeDeficulty(6)\">6</span>\n" +
        "                <span class=\"7 sp1\" onclick=\"changeDeficulty(7)\">7</span>\n" +
        "                <span class=\"8 sp1\" onclick=\"changeDeficulty(8)\">8</span>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "        <div id=\"gameboard\">\n" +
        "            <div id=\"gameplayboard\">\n" +
        "                <img src=\"image/loading.gif\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
},3000);

function changeDeficulty(number) {
    var spans = document.getElementsByClassName("sp1");
    for(var span in spans){
        spans[span].classList.remove("selectedspan");
        if(spans[span].classList.contains(number+"")){
            spans[span].classList.add("selectedspan");
            defficulty = number;
        }
    }
    defficulty = number;
}
function startgame(){
    username = document.getElementById("getusername").value;
    var sd = document.getElementById("LoadPage");
    var sds = document.getElementById("LoadPageSelection");
    var gb = document.getElementById("gameboard");
    var gbs = document.getElementById("gameplayboard");
    var jc = 1;
    var sdsString = sds.innerHTML;
    var b = setInterval(xf,50);
    function xf(){
        if(jc == 1){
            var w = 80;
            var h = 90;
            var p = 90/80;
            var l = 10;
            var t = 5;
            var y = setInterval(wh,1);
            function wh() {

                if (w == 60) {
                    clearInterval(y);
                } else {
                    w--;
                    if(w%2 == 0){
                        l++;
                        t = l * p;

                    }
                    h = w * p;
                    sds.style.width = w + "%";
                    sds.style.height = h + "%";
                    sds.style.left = (100-w)/2 + "%";
                    sds.style.top = (100-h)/2 + "%";
                    if(it>0){
                        sd.style.background ="rgba(64,64,64,"+it+")";
                        it=it-0.5;
                    }
                }
            }
        }else if (jc == 2){
            sd.style.background = "#00000000";
            gb.style.background = "#00000000";
            var i=0;
            var x = setInterval(frame,3);
            var y = 60,zc=67;
            function frame() {
                if (i == 100) {
                    clearInterval(x);
                    gb.style.background = "rgba(64,64,64,0)";
                    var xt = setInterval(ftp,5);
                    var itx = 0.01;
                    function ftp() {
                        if(itx >= 0.7){
                            clearInterval(xt);
                        }
                        itx = itx+0.01;
                        gb.style.background = "rgba(64,64,64,"+itx+")";
                        if(y<=96){
                            gbs.style.width = ""+y+"%";
                            gbs.style.height = ""+zc+"%";
                            gbs.style.left = ""+(100-y)/2+"%";
                            gbs.style.top = ""+(100-zc)/2+"%";
                            y++;

                            if(zc<=96){
                                zc = (67*y/60);
                            }
                        }


                    }
                } else {
                    i++;
                    sd.style.left = i + "%";
                    gb.style.left = "-"+(100-i)+"%";
                }
            }


        }else if(jc == 3){
            var si = setInterval(vb,3000);
            function vb() {
                createGbs();
                clearInterval(si);
            }

        }else {
            clearInterval(b);

        }
        jc++;


    }
}


//Setting View
function showSettingMenu() {
    clearInterval(xh);
    var gbs = document.getElementById("gameplayboard");
    gbs.innerHTML = "<ul id=\"settingMenu\">\n" +
        "                    <li onclick=\"showMatrixLength()\">\n" +
        "                        <span>Matrix Length</span>\n" +
        "                        <img src=\"image/right-arrow-angle.png\">\n" +
        "                        <span id=\"optionValue_matLen\" class=\"optionValue\">7 x 7</span>\n" +
        "                    </li>\n" +
        "                    <li onclick='showChooseAlgrotitm()'>\n" +
        "                        <span>Algoritm</span>\n" +
        "                        <img src=\"image/right-arrow-angle.png\">\n" +
        "                        <span id=\"optionValue_algoritm\" class=\"optionValue\">MinMax</span>\n" +
        "                    </li>\n" +
        "                    <li onclick=\"showDefficultySetting()\">\n" +
        "                        <span>Difficulty</span>\n" +
        "                        <img src=\"image/right-arrow-angle.png\">\n" +
        "                        <span id=\"optionValue_DIFFICULTY\" class=\"optionValue\">5</span>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "\n" +
        "                <button id=\"saveGame\" onclick='createGbs()'>PLAY NEW GAME</button>"+
        "                <footer id=\"gbfooter\">\n" +
        "                    <span>&copy;ABAS BAGHERI</span>\n" +
        "                </footer>";
    document.getElementById("optionValue_matLen").innerHTML = this.matlen + " x " + this.matlen;
    document.getElementById("optionValue_algoritm").innerHTML = (this.algoritm == 100)?"MINMAX":"ALPHABETA";
    document.getElementById("optionValue_DIFFICULTY").innerHTML = this.defficulty;
}
function showMatrixLength() {
    var gbs = document.getElementById("gameplayboard");
    gbs.innerHTML = "<div id=\"selectMatrixLengthDiv\">\n" +
        "                    <span class=\"selectMatrixLengthTitle\">Select Matrix Option</span>\n" +
        "                    <ul id=\"changeSetting\">\n" +
        "                        <li class='cm4' onclick=\"setMatLen(4)\">4 x 4</li>\n" +
        "                        <li class='cm5' onclick=\"setMatLen(5)\">5 x 5</li>\n" +
        "                        <li class='cm6' onclick=\"setMatLen(6)\">6 x 6</li>\n" +
        "                        <li class='cm7' onclick=\"setMatLen(7)\">7 x 7</li>\n" +
        "                        <li class='cm8' onclick=\"setMatLen(8)\">8 x 8</li>\n" +
        "                        <li class='cm9' onclick=\"setMatLen(9)\">9 x 9</li>\n" +
        "                        <li class='cm10' onclick=\"setMatLen(10)\">10 x 10</li>\n" +
        "                        <li class='cm11' onclick=\"setMatLen(11)\">11 x 11</li>\n" +
        "                        <li class='cm12' onclick=\"setMatLen(12)\">12 x 12</li>\n" +
        "                        <li class='cm13' onclick=\"setMatLen(13)\">13 x 13</li>\n" +
        "                        <li class='cm14' onclick=\"setMatLen(14)\">14 x 14</li>\n" +
        "                        <li class='cm15' onclick=\"setMatLen(15)\">15 x 15</li>\n" +
        "                        <li class='cm16' onclick=\"setMatLen(16)\">16 x 16</li>\n" +
        "                    </ul>\n" +
        "                    <button onclick=\"showSettingMenu()\">OK</button>\n" +
        "                </div>"+
        "                <footer id=\"gbfooter\">\n" +
        "                    <span>&copy;ABAS BAGHERI</span>\n" +
        "                </footer>";
    var el = document.getElementById("changeSetting").getElementsByClassName("cm"+this.matlen+"");
    for(i=0;i<el.length;i++){
        el[i].classList.add('selected');
    }
}
function setMatLen(number) {
    this.matlen = number;
    var el = document.getElementById("changeSetting").querySelectorAll("*");
    var i;
    for(i=0;i<el.length;i++){
        el[i].classList.remove('selected');
    }
    el = document.getElementById("changeSetting").getElementsByClassName("cm"+this.matlen+"");
    for(i=0;i<el.length;i++){
        el[i].classList.add('selected');
    }
}
function showChooseAlgrotitm(){
    var gbs = document.getElementById("gameplayboard");
    gbs.innerHTML = "<div id=\"selectMatrixLengthDiv\">\n" +
        "                    <span class=\"selectMatrixLengthTitle\">Select Matrix Option</span>\n" +
        "                    <ul id=\"changeSetting\">\n" +
        "                        <li class='ca100' onclick=\"setAlgoritm(100)\">MINMAX</li>\n" +
        "                        <li class='ca200' onclick=\"setAlgoritm(200)\">ALPHABETA</li>\n" +
        "                    </ul>\n" +
        "                    <button onclick=\"showSettingMenu()\">OK</button>\n" +
        "                </div>"+
        "                <footer id=\"gbfooter\">\n" +
        "                    <span>&copy;ABAS BAGHERI</span>\n" +
        "                </footer>";
    var el = document.getElementById("changeSetting").getElementsByClassName("ca"+this.algoritm+"");
    for(i=0;i<el.length;i++){
        el[i].classList.add('selected');
    }

}
function setAlgoritm(number) {
    this.algoritm = number;
    var el = document.getElementById("changeSetting").querySelectorAll("*");
    var i;
    for(i=0;i<el.length;i++){
        el[i].classList.remove('selected');
    }
    el = document.getElementById("changeSetting").getElementsByClassName("ca"+this.algoritm+"");
    for(i=0;i<el.length;i++){
        el[i].classList.add('selected');
    }
}
function showDefficultySetting() {
    var gbs = document.getElementById("gameplayboard");
    gbs.innerHTML = "<div id=\"selectMatrixLengthDiv\">\n" +
        "                    <span class=\"selectMatrixLengthTitle\">Select Matrix Option</span>\n" +
        "                    <ul id=\"difficulty\">\n" +
        "                        <li class='cd1' onclick=\"changeDifficultyonSetong(1)\">1</li>\n" +
        "                        <li class='cd2' onclick=\"changeDifficultyonSetong(2)\">2</li>\n" +
        "                        <li class='cd3' onclick=\"changeDifficultyonSetong(3)\">3</li>\n" +
        "                        <li class='cd4' onclick=\"changeDifficultyonSetong(4)\">4</li>\n" +
        "                        <li class='cd5' onclick=\"changeDifficultyonSetong(5)\">5</li>\n" +
        "                        <li class='cd6' onclick=\"changeDifficultyonSetong(6)\">6</li>\n" +
        "                        <li class='cd7' onclick=\"changeDifficultyonSetong(7)\">7</li>\n" +
        "                        <li class='cd8' onclick=\"changeDifficultyonSetong(8)\">8</li>\n" +
        "                    </ul>\n" +
        "                    <button onclick=\"showSettingMenu()\">OK</button>\n" +
        "            </div>"+
        "                <footer id=\"gbfooter\">\n" +
        "                    <span>&copy;ABAS BAGHERI</span>\n" +
        "                </footer>";
    var el = document.getElementById("difficulty").getElementsByClassName("cd"+this.defficulty+"");
    for(i=0;i<el.length;i++){
        el[i].classList.add('selected');
    }
}
function changeDifficultyonSetong(number) {
    this.defficulty = number;
    var el = document.getElementById("difficulty").querySelectorAll("*");
    var i;
    for(i=0;i<el.length;i++){
        el[i].classList.remove('selected');
    }
    el = document.getElementById("difficulty").getElementsByClassName("cd"+this.defficulty+"");
    for(i=0;i<el.length;i++){
        el[i].classList.add('selected');
    }
}


//create game view
function createGbs() {
    v=false;
    var gbs = document.getElementById("gameplayboard");
    var htmlString = "<header id=\"gbheader\">\n" +
        "                    <span id=\"usernamesp\">"+username+"</span>\n" +
        "                    <span id=\"timesp\">00:00</span>\n" +
        "                    <span id=\"diffValue\">difficulty : "+this.defficulty+"</span>\n"+
        "                    <span id=\"alValue\">"+((this.algoritm==100)?"MINMAX":"ALPHABETA")+"</span>\n"+
        "                    <img src='image/setting.png' id=\"settingbtn\" onclick=\"showSettingMenu()\"></img>\n" +
        "                </header>\n" +
        "                <section id=\"gbsection\">\n" +
        "                    <div id=\"gamepad\">\n";
    var i;
    for(i=0;i<this.matlen;i++){
        var j;
        for(j=0;j<this.matlen;j++){
            htmlString = htmlString +
                "                        <div class=\"r" + i + " c" + j + " gamerc\" '>\n" +
                "                            <span onclick=\"userPlay(" + i + "," + j +")\" onmouseover= \"hoverGameRec("+j+")\" onmouseout=\"nohover("+j+")\"></span>\n" +
                "                        </div>\n";

        }

    }
    htmlString = htmlString +
        "                    </div>\n" +
        "                    <div id=\"gamecontrol\">\n" +
        "                        <button id=\"restart\" onclick='reset()'>reset</button>\n" +
        "                        <button id=\"pause\">مکث</button>\n" +
        "                        <button id=\"exit\" onclick=\"refresh()\">exit</button>\n" +
        "                    </div>\n" +
        "                    <div id=\"ai_action\" class=\"hiddenDiv\">هوش مصنوعی ...</div>"+
        "                </section>\n" +
        "                <footer id=\"gbfooter\">\n" +
        "                    <span>&copy;عباس باقری</span>\n" +
        "                </footer>";
    gbs.innerHTML = htmlString;

    el = document.getElementsByClassName("gamerc");
    var xsize = (400/(this.matlen))-0.1;
    for(i=0;i<el.length;i++){

        el[i].style.width = xsize + "px";
        el[i].style.height = xsize + "px";
        var j;
        var els = el[i].querySelectorAll("span");
        for(j=0;j<els.length;j++){
            if(this.matlen <= 5){
                els[j].style.width = (xsize - 8) + "px";
                els[j].style.height = (xsize - 8) + "px";
                els[j].style.margin = 4 + "px";
                els[j].style.borderRadius = (xsize - 8)/2 + "px";
            }else if(this.matlen <= 9){
                els[j].style.width = (xsize - 6) + "px";
                els[j].style.height = (xsize - 6) + "px";
                els[j].style.margin = 3 + "px";
                els[j].style.borderRadius = (xsize - 6)/2 + "px";
            }else{
                els[j].style.width = (xsize - 4) + "px";
                els[j].style.height = (xsize - 4) + "px";
                els[j].style.margin = 2 + "px";
                els[j].style.borderRadius = (xsize - 4)/2 + "px";
            }
        }
    }
    var xi;
    this.gbArray = new Array(this.matlen);
    for(xi=0;xi<this.matlen;xi++) {
        var xj;
        this.gbArray[xi] = new Array(this.matlen);
        for (xj = 0; xj < this.matlen; xj++) {
            this.gbArray[xi][xj] = 0;
        }
    }
    colorGameRc();
    var s = 0;
    var m = 0;
    var p = 0;
    this.xh = setInterval(fch,1000);
    function fch() {
        p++;
        m = parseInt(p/60);
        s = parseInt(p%60);
        var ss="";
        if(s<=9){
            ss = "0";
        }
        ss = ss + s;
        var ms = "";
        if(m<=9){
            ms = "0"
        }
        ms = ms + m;
        document.getElementById("timesp").innerHTML = ms + ":" + ss;
    }
    var element1 = document.getElementById("alValue");
    if(element1.innerHTML == "ALPHABETA"){
        element1.style.right = "135px";
    }else {
        element1.style.right = "152px";
    }

}

//play game
p=-1;
function userPlay(i,j){
        for (var k = this.matlen - 1; k >= 0; k = k - 1) {
            if (gbArray[k][j] == 0) {
                gbArray[k][j] = p;
                break;
            }
        }
        var k = 0;
        colorGameRc();
        document.getElementById("ai_action").classList.toggle('hiddenDiv');
        var gbpad = document.getElementById("gamepad").querySelectorAll("*");
        for(var i=0;i<gbpad.length;i++){
            gbpad[i].style.pointerEvents = "none";
        }
        var m = window.setInterval(playInterval, 30);
        function playInterval() {
            clearTimeout(m);
            if (k == 0) {
                document.getElementById("ai_action").classList.toggle('hiddenDiv');
                playAI();
                for(var i=0;i<gbpad.length;i++){
                    gbpad[i].style.pointerEvents = "all";
                }
            }

        }
}
function colorGameRc() {
    var el = document.getElementById("gamepad");
    var k;
    for(k=0;k<this.matlen;k++){
        var l;
        for(l=0;l<this.matlen;l++){
            if(this.gbArray[k][l]==1){
                //gbs.innerHTML = gbs.innerHTML + "HH";
                var els = el.getElementsByClassName("r"+k+ " " +"c"+l);
                var t;
                for(t=0 ; t<els.length;t++){
                    els[t].querySelectorAll("span")[0].style.background = "#ef5350";

                }

            }

            if(this.gbArray[k][l]==-1){
                //gbs.innerHTML = gbs.innerHTML + "HH";
                var els = el.getElementsByClassName("r"+k+ " " +"c"+l);
                var t;
                for(t=0 ; t<els.length;t++){
                    els[t].querySelectorAll("span")[0].style.background = "#3d5afe";

                }

            }
        }
    }
}
function hoverGameRec(coloumn){
    el = document.getElementsByClassName("c"+coloumn);
    for(var i=0;i<el.length;i++){
        el[i].querySelectorAll("span")[0].style.borderColor = "#4a4a4a";
        el[i].querySelectorAll("span")[0].style.boxShadow="1px 1px 2px gray";
    }
}
function nohover(coloumn) {
    el = document.getElementsByClassName("c"+coloumn);
    for(var i=0;i<el.length;i++){
        el[i].querySelectorAll("span")[0].style.borderColor = "#a4a4a4";
        el[i].querySelectorAll("span")[0].style.boxShadow="none";
    }
}
function refresh() {
    location.reload();
}
function reset() {
    clearInterval(xh);
    createGbs();
}

//MiniMax AND ALPHA-BETA AI-------------------------------------------------------------------------------------------------------------
class Node{
    constructor(matrix,level){
        this.matrix = matrix;
        this.score = 0;
        this.level = level;
    }
}
class GameTree {
    constructor(matrix,level){
        this.node = new Node(matrix,0);
        this.level = level;
    }
    isFinalState(matrix,index){
        for(var i=matrix.length-1;i>=index;i--){
            for(var j=matrix.length-4;j>=0;j--){
                if(matrix[i][j] == 1 || matrix[i][j] == -1){
                    if(matrix[i][j] == matrix[i][j+1] && matrix[i][j] == matrix[i][j+2] && matrix[i][j] == matrix[i][j+3]){
                        return matrix[i][j] * 1;
                    }
                }
            }
        }
        for(var i=matrix.length-4;i>=index;i--){
            for(var j=matrix.length-1;j>=0;j--){
                if(matrix[i][j] == 1 || matrix[i][j] == -1){
                    if(matrix[i][j] == matrix[i+1][j] && matrix[i][j] == matrix[i+2][j] && matrix[i][j] == matrix[i+3][j]){
                        return matrix[i][j] * 1;
                    }
                }
            }
        }
        for(var i=matrix.length-4;i>=index;i--){
            for(var j=matrix.length-4;j>=0;j--){
                if(matrix[i][j] == 1 || matrix[i][j] == -1){
                    if(matrix[i][j] == matrix[i+1][j+1] && matrix[i][j] == matrix[i+2][j+2] && matrix[i][j] == matrix[i+3][j+3]){
                        return matrix[i][j] * 1;
                    }
                }
            }
        }
        for(var i=matrix.length-4;i>=index;i--){
            for(var j=matrix.length-1;j>=3;j--){
                if(matrix[i][j] == 1 || matrix[i][j] == -1){
                    if (matrix[i][j] == matrix[i+1][j-1] && matrix[i][j] == matrix[i+2][j-2] && matrix[i][j] == matrix[i+3][j-3]){
                        return matrix[i][j] * 1;
                    }
                }
            }
        }
        return 0;
    }
    isThree(matrix,player,index){
        for(var i=matrix.length-1;i>=index;i--){
            for(var j=matrix.length-3;j>=0;j--){
                if(matrix[i][j] == player){
                    if(matrix[i][j] == matrix[i][j+1] && matrix[i][j] == matrix[i][j+2]){
                        if((i>0 && matrix[i][j-1] == 0) ){
                            if(i==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i+1][j-1] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if((j+3<matrix.length && matrix[i][j+3] == 0)){
                            if(i==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i+1][j+3] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-1;i>=2;i--){
            for(var j=matrix.length-1;j>=0;j--){
                if(matrix[i][j] == player){
                    if(matrix[i][j] == matrix[i-1][j] && matrix[i][j] == matrix[i-2][j]){
                        if((i-3>=0 && matrix[i-3][j] == 0)){
                            return matrix[i][j] * 1;
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-3;i>=index;i--){
            for(var j=matrix.length-3;j>=0;j--){
                if(matrix[i][j] == player){
                    if (matrix[i][j] == matrix[i+1][j+1] && matrix[i][j] == matrix[i+2][j+2]){
                        if((i>0 && j>0 && matrix[i-1][j-1] == 0)){
                            if(matrix[i][j-1] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if(i+3<matrix.length && j+3<matrix.length && matrix[i+3][j+3] == 0){
                            if(i+3==matrix.length-1){
                                return matrix[i][j] * 1;
                            }
                            else if(matrix[i+4][j+3] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-3;i>=index;i--){
            for(var j=matrix.length-1;j>=2;j--){
                if(matrix[i][j] == player){
                    if (matrix[i][j] == matrix[i+1][j-1] && matrix[i][j] == matrix[i+2][j-2]){
                        if((i>0 && j<matrix.length-1 && matrix[i-1][j+1] == 0)){
                            if(i+1==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i][j+1] != 0){
                                return matrix[i][j] * 1;
                            }

                        }
                        if(i+3<matrix.length && j-3>=0 && matrix[i+3][j-3] == 0){
                            if(i+3==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i+4][j-3] != 0){
                                return matrix[i][j] * 1;
                            }

                        }
                    }
                }
            }
        }
        for(var i=matrix.length-1;i>=index;i--){
            for(var j=0;j<=matrix.length-2;j++){
                if(j+3<matrix.length && matrix[i][j]==player){
                    if(matrix[i][j]==matrix[i][j+1] && matrix[i][j]==matrix[i][j+3] && matrix[i][j+2]==0){
                        if(i==matrix.length-1){
                            return matrix[i][j] *1;
                        }else if(matrix[i+1][j+2]!=0){
                            return matrix[i][j] *1;
                        }
                    }
                }
                if(j>1 && matrix[i][j]==player){
                    if(matrix[i][j]==matrix[i][j+1] && matrix[i][j]==matrix[i][j-2] && matrix[i][j-1]==0){
                        if(i==matrix.length-1){
                            return matrix[i][j] *1;
                        }else if(matrix[i+1][j-1]!=0){
                            return matrix[i][j] *1;
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-1;i>=0;i--){
            for(var j=0;j<=matrix.length-2;j++){
                if(i+3<matrix.length-1 && j+3<matrix.length-1 && matrix[i][j]==player){
                    if(matrix[i][j]==matrix[i+1][j+1] && matrix[i][j]==matrix[i+3][j+3] && matrix[i+2][j+2]==0){
                        if(matrix[i+3][j+2]!=0){
                            return matrix[i][j] *1;
                        }
                    }
                }
                if(i>1 && i<matrix.length-1 && j>1 && matrix[i][j]==player){
                    if(matrix[i][j]==matrix[i+1][j+1] && matrix[i][j]==matrix[i-2][j-2] && matrix[i-1][j-1]==0){
                        if(matrix[i][j-1]!=0){
                            return matrix[i][j] *1;
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-1;i>=0;i--){
            for(var j=0;j<=matrix.length-2;j++){
                if(j+3<matrix.length-1 && i-3>=0 && matrix[i][j]==player){
                    if(matrix[i][j]==matrix[i-1][j+1] && matrix[i][j]==matrix[i-3][j+3] && matrix[i-2][j+2]==0){
                        if(matrix[i-1][j+2]!=0){
                            return matrix[i][j] *1;
                        }
                    }
                }
                if(i+2<matrix.length && i-1>0 && j>1 && matrix[i][j]==player){
                    if(matrix[i][j]==matrix[i-1][j+1] && matrix[i][j]==matrix[i+2][j-2] && matrix[i+1][j-1]==0){
                        if(matrix[i+2][j-1]!=0){
                            return matrix[i][j] *1;
                        }
                    }
                }
            }
        }
        return 0;
    }
    isTwo(matrix,player,index){
        for(var i=matrix.length-1;i>=index;i--){
            for(var j=matrix.length-2;j>=0;j--){
                if(matrix[i][j] == player){
                    if(matrix[i][j] == matrix[i][j+1]){
                        if((j>0 && matrix[i][j-1] == 0) && (j+2<matrix.length && matrix[i][j+2] == 0)){
                            if(i==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i+1][j-1] != 0 && matrix[i+1][j+2] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if((j>1 && matrix[i][j-1] == 0) && matrix[i][j-2] == 0){
                            if(i==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i+1][j-1] != 0 && matrix[i+1][j-2] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if(j+3<matrix.length && matrix[i][j+2] == 0 && matrix[i][j+3] == 0){
                            if(i==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i+1][j+2] != 0 && matrix[i+1][j+3] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-2;i>=index;i--){
            for(var j=matrix.length-1;j>=0;j--){
                if(matrix[i][j] == player){
                    if(matrix[i][j] == matrix[i+1][j]){
                        if(i>1 && matrix[i-1][j] == 0 && matrix[i-2][j] == 0){
                            return matrix[i][j] * 1;
                        }
                    }
                }
            }
        }
        for(var i=matrix.length-2;i>=index;i--){
            for(var j=matrix.length-2;j>=0;j--){
                if(matrix[i][j] == player){
                    if (matrix[i][j] == matrix[i+1][j+1] ){
                        if((i>0 && j>0 && matrix[i-1][j-1] == 0) && (i+2 <matrix.length && j+2<matrix.length && matrix[i+2][j+2] == 0)){
                            if(matrix[i][j-1] != 0 && i+2==matrix.length-1){
                                return matrix[i][j] * 1;
                            }else if(matrix[i][j-1] != 0 && matrix[i+3][j+2] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if(i>1 && j>1 && matrix[i-1][j-1] == 0 && matrix[i-2][j-2]==0){
                            if(matrix[i][j-1] != 0 && matrix[i-1][j-2]!=0){
                                return matrix[i][j] * 1;
                            }
                        }if(i+3 <matrix.length && j+3<matrix.length && matrix[i+2][j+2] == 0 && matrix[i+3][j+3] == 0){
                            if(i+3==matrix.length-1 && matrix[i+3][j+2] != 0){
                                return matrix[i][j] * 1;
                            }else if( matrix[i+3][j+2] != 0 && matrix[i+4][j+3] != 0){
                                return matrix[i][j] * 1;
                            }

                        }
                    }
                }
            }
        }
        for(var i=matrix.length-2;i>=index;i--){
            for(var j=matrix.length-1;j>=1;j--){
                if(matrix[i][j] == player){
                    if (matrix[i][j] == matrix[i+1][j-1]){
                        if((i>0 && j<matrix.length-1 && matrix[i-1][j+1] == 0) && (i+2<matrix.length && j-2>=0 && matrix[i+2][j-2] == 0)){
                            if(i+2==matrix.length-1 && matrix[i][j+1] != 0){
                                return matrix[i][j] * 1;
                            }else if(matrix[i][j+1] != 0 && matrix[i+3][j-2] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if(i>1 && j<matrix.length-2 && matrix[i-1][j+1] == 0 && matrix[i-2][j+2]==0){
                            if(matrix[i][j+1] != 0 && matrix[i-1][j+2]!=0){
                                return matrix[i][j] * 1;
                            }
                        }
                        if(i+3<matrix.length && j-3>=0 && matrix[i+3][j-3] == 0 && matrix[i+2][j-2] == 0){
                            if(i+3 == matrix.length-1 && matrix[i+3][j-2] != 0){
                                return matrix[i][j] * 1;
                            }else if(i+4<matrix.length && matrix[i+4][j-3] != 0 && matrix[i+3][j-2] != 0){
                                return matrix[i][j] * 1;
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }
    utility(matrix,player,index,level){
        var mi=0,ma=0;
        var isFinal = this.isFinalState(matrix,index);
        if(isFinal == 1){
            return 5000 + 1000*(10-level);
        }
        if (isFinal == -1){
            return -5000 - 1000*(10-level);
        }
        if (this.isThree(matrix,-1,index)==-1){
            if(player == -1){
                mi = -500 - (1000*(10-level));
            }else{
                mi = -4500 - (1000*(10-level));
            }

        } else if(this.isTwo(matrix,-1,index)==-1){
            mi = -50 - 10*(10-level);
        }
        if(this.isThree(matrix,1,index)==1){
            if(player == 1){
                ma = 500 + (1000*(10-level));
            }else {
                ma = 4500 + (1000*(10-level));
            }

        }else if (this.isTwo(matrix,1,index)==1){
            ma = 50 + 10*(10-level);
        }
        return mi+ma;
    }
    checkFull(matrix){
        for (var i=0;i<matrix.length;i++){
            //document.getElementById("gameplayboard").innerHTML += this.node.score;
            if(matrix[0][i]==0){
                return false;
            }
        }
        return true;
    }
    getChilds(matrix,player){
        var matArray = new Array();
        for(var j=0;j<matrix.length;j++){
            if(matrix[0][j]==0){
                var k = JSON.parse(JSON.stringify(matrix));
                for(var i=k.length-1;i>=0;i--){
                    if(k[i][j]==0){
                        k[i][j]=player;
                        matArray.push(k);
                        break;
                    }
                }
            }
        }
        return matArray;
    }
    doMinMax(){
        this.node = this.max(this.node);
        this.node.level=0;
        this.node.score=0;
    }
    max(node) {
        var isFinal = this.isFinalState(node.matrix,0);
        if (node.level == this.level || isFinal == -1 ||  isFinal == 1) {
            var index=0;
            for (var i=node.matrix.length-1;i>=0;i--){
                var isAllColumnZeroInRow = true;
                for (var j=0;j<node.matrix.length;j++){
                    if(node.matrix[i][j]!=0){
                        isAllColumnZeroInRow = false;
                        break;
                    }
                }
                if(isAllColumnZeroInRow){
                    index = i+1;
                }
            }
            return this.utility(node.matrix,-1,index,node.level)+node.level;
        }if(this.checkFull(node.matrix)==true){
            return 0;
        }else {
            var matArray = this.getChilds(node.matrix,1);
            var currentArray=new Array();
            node.score = -100000;
            for(var i=0;i<matArray.length;i++){
                var newNode = this.min(new Node(matArray[i],node.level+1));
                if(node.score < newNode){
                    node.score=newNode;
                }
                if(node.level==0){
                    currentArray.push(newNode);
                }
            }
            if(node.level==0){
                var p= new Array();
                for(var i=0;i<currentArray.length;i++){
                    if(currentArray[i]==node.score){
                        console.log(node.score);
                        p.push(new Node(matArray[i],node.level+1));
                    }
                }
                if(p.length>0){
                    index = Math.floor(Math.random()*p.length+0);
                    p[index].score = node.score;
                    return p[index];
                }
                return new Node(matArray[0],node.level+1)
            }
            return node.score;
        }
    }
    min(node) {
        var isFinal = this.isFinalState(node.matrix,0);
        if(node.level == this.level || isFinal == -1 || isFinal == 1 ) {
            for (var i=node.matrix.length-1;i>=0;i--){
                var isAllColumnZeroInRow = true;
                for (var j=0;j<node.matrix.length;j++){
                    if(node.matrix[i][j]!=0){
                        isAllColumnZeroInRow = false;
                        break;
                    }
                }
                if(isAllColumnZeroInRow){
                    index = i+1;
                }
            }
            var index=0;
            return this.utility(node.matrix,1,index,node.level)-node.level;
        }else if(this.checkFull(node.matrix)==true){
            return 0;
        }else {
            var matArray = this.getChilds(node.matrix,-1);
            node.score = 100000;
            for(var i=0;i<matArray.length;i++){
                var newNode = this.max(new Node(matArray[i],node.level+1));
                if(node.score > newNode){
                    node.score=newNode;
                }
            }
            return node.score;
        }

    }
    doAlphaBeta(){
        console.log(" new ");
        this.node = this.Alpha(this.node,-100000,100000);
        this.node.level=0;
        this.node.score=0;
    }
    Alpha(node,alpha,beta) {
        var isFinal = this.isFinalState(node.matrix,0);
        if (node.level == this.level || isFinal == -1 ||  isFinal == 1) {
            var index=0;
            return this.utility(node.matrix,-1,index,node.level);
        }if(this.checkFull(node.matrix)==true){
            return 0;
        }else {
            var matArray = this.getChilds(node.matrix,1);
            var currentArray=new Array();
            node.score = -100000;
            for(var i=0;i<matArray.length;i++){
                var newNode = this.Beta(new Node(matArray[i],node.level+1),alpha,beta);
                node.score = Math.max(node.score,newNode);
                alpha = Math.max(node.score,alpha);
               // console.log(node.level + " => "+ i + " => " + newNode+ " => alpha : " + alpha + "beta => " + beta);
                if(node.level==0){
                    currentArray.push(new Node(matArray[i],node.level+1));
                    currentArray[i].score = newNode;
                    console.log(i+ " => "+ newNode);
                }
                if(alpha>=beta){
                    break;
                }
            }
            if(node.level==0){
                var p = new Array();
                for(var i=0;i<currentArray.length;i++){
                    if(currentArray[i].score==node.score){
                        if(this.isFinalState(currentArray[i].matrix,0)==1){
                            return currentArray[i];
                        }else if(this.isThree(currentArray[i].matrix,-1,0)==-1){
                            continue;
                        }
                        p.push(currentArray[i]);
                    }
                }
                if(p.length>0){
                    var index = Math.floor(Math.random()*p.length+0);
                    p[index].score = node.score;
                    return p[index];
                }
                var index = Math.floor(Math.random()*currentArray.length+0);
                currentArray[index].score = node.score;
                return currentArray[index];
            }
            return node.score;
        }
    }
    Beta(node,alpha,beta) {
        var isFinal = this.isFinalState(node.matrix,0);
        if(node.level == this.level || isFinal == -1 || isFinal == 1 ) {
            var index=0;
            return this.utility(node.matrix,1,index,node.level);
        }else if(this.checkFull(node.matrix)==true){
            return 0;
        }else {
            var matArray = this.getChilds(node.matrix,-1);
            node.score = 100000;
            for(var i=0;i<matArray.length;i++){
                var newNode = this.Alpha(new Node(matArray[i],node.level+1),alpha,beta);
                node.score=Math.min(newNode,node.score);
                beta = Math.min(beta,node.score);
                if(alpha>=beta){
                    break;
                }
            }
            return node.score;
        }

    }
}
function playAI(){
    var tree = new GameTree(gbArray,this.defficulty);
    if(tree.isFinalState(gbArray,0)==-1){
        document.getElementById("gbsection").innerHTML += "<div id=\"windiv\">" +
            "<span id='dg'>You Win</span>\n" +
            "<span>Show Time</span>"+
            "<button onclick='reset()' class='tmbtn'>PLAY AGAIN</button>"+
            "</div>";
        colorWin(gbArray,0);
        return true;
    }
    if(algoritm==100){
        tree.doMinMax();
    }else {
        tree.doAlphaBeta();
    }

    gbArray=tree.node.matrix;
    colorGameRc();
    if(tree.isFinalState(gbArray,0)==1) {
        document.getElementById("gbsection").innerHTML += "<div id=\"windiv\">" +
            "<span id=\"showWinner\">AI Win</span>\n" +
            "<span>14:48</span>" +
            "<button ONCLICK='reset()'>PLAY AGAIN</button>" +
            "</div>";
        colorWin(gbArray,0);
        return true;
    } else {
        return true;
    }
}


function colorWin(matrix,index) {
    var el = document.getElementById("gamepad");
    var i1,i2,i3,i4,j1,j2,j3,j4;
    for(var i=matrix.length-1;i>=index;i--){
        for(var j=matrix.length-4;j>=0;j--){
            if(matrix[i][j] == 1 || matrix[i][j] == -1){
                if(matrix[i][j] == matrix[i][j+1] && matrix[i][j] == matrix[i][j+2] && matrix[i][j] == matrix[i][j+3]){
                    i1 = i;
                    i2 = i;
                    i3 = i;
                    i4 = i;
                    j1 = j;
                    j2 = j+1;
                    j3 = j+2;
                    j4 = j+3;
                }
            }
        }
    }
    for(var i=matrix.length-4;i>=index;i--){
        for(var j=matrix.length-1;j>=0;j--){
            if(matrix[i][j] == 1 || matrix[i][j] == -1){
                if(matrix[i][j] == matrix[i+1][j] && matrix[i][j] == matrix[i+2][j] && matrix[i][j] == matrix[i+3][j]){
                    i1 = i;
                    i2 = i+1;
                    i3 = i+2;
                    i4 = i+3;
                    j1 = j;
                    j2 = j;
                    j3 = j;
                    j4 = j;
                }
            }
        }
    }
    for(var i=matrix.length-4;i>=index;i--){
        for(var j=matrix.length-4;j>=0;j--){
            if(matrix[i][j] == 1 || matrix[i][j] == -1){
                if(matrix[i][j] == matrix[i+1][j+1] && matrix[i][j] == matrix[i+2][j+2] && matrix[i][j] == matrix[i+3][j+3]){
                    i1 = i;
                    i2 = i+1;
                    i3 = i+2;
                    i4 = i+3;
                    j1 = j;
                    j2 = j+1;
                    j3 = j+2;
                    j4 = j+3;
                }
            }
        }
    }
    for(var i=matrix.length-4;i>=index;i--){
        for(var j=matrix.length-1;j>=3;j--){
            if(matrix[i][j] == 1 || matrix[i][j] == -1){
                if (matrix[i][j] == matrix[i+1][j-1] && matrix[i][j] == matrix[i+2][j-2] && matrix[i][j] == matrix[i+3][j-3]){
                    i1 = i;
                    i2 = i+1;
                    i3 = i+2;
                    i4 = i+3;
                    j1 = j;
                    j2 = j-1;
                    j3 = j-2;
                    j4 = j-3;
                }
            }
        }
    }
    var els = el.getElementsByClassName("r"+i1+ " " +"c"+j1);
    for( var t=0 ; t<els.length;t++){
        els[t].querySelectorAll("span")[0].style.background = "green";

    }
    els = el.getElementsByClassName("r"+i2+ " " +"c"+j2);
    for( var t=0 ; t<els.length;t++){
        els[t].querySelectorAll("span")[0].style.background = "green";

    }
    els = el.getElementsByClassName("r"+i3+ " " +"c"+j3);
    for( var t=0 ; t<els.length;t++){
        els[t].querySelectorAll("span")[0].style.background = "green";

    }
    els = el.getElementsByClassName("r"+i4+ " " +"c"+j4);
    for( var t=0 ; t<els.length;t++){
        els[t].querySelectorAll("span")[0].style.background = "green";

    }

}
