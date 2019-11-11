var baseStr = `/*CSS画一个皮卡丘*/
#pikachu {
    width: 350px;
    height: 200px;
    position: relative;
    margin: 0 auto;
}

.nose {
    width: 0px;
    height: 0px;
    border-width: 12px;
    border-color: #000000 transparent transparent;
    border-style: solid;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 27px;
    margin-left: -12px;
}

.eye {
    width: 51px;
    height: 51px;
    background: #2E2E2E;
    border: 2px solid #000000;
    border-radius: 50%;
    position: absolute;
    top: 0px;
}

.eye::before {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 2px solid #000000;
    position: absolute;
    left: 5px;
}

.eye.left {
    right: 50%;
    margin-right: 70px;
}

.eye.right {
    left: 50%;
    margin-left: 70px;
}

.cheek {
    width: 70px;
    height: 70px;
    background: #FF0200;
    border: 2px solid #000000;
    border-radius: 50%;
    position: absolute;
    top: 88px;
}

.cheek.left {
    right: 50%;
    margin-right: 98px;
}

.cheek.right {
    left: 50%;
    margin-left: 98px;
}

.lips {
    width: 68px;
    height: 19px;
    background: #FEE700;
    border: 2px solid black;
    position: absolute;
    top: 52px;
}

.lips.left {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 50px 30px;
    transform: rotate(-15deg);
    right: 50%;
}

.lips.right {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 50px 30px;
    transform: rotate(15deg);
    left: 50%;
}

.mouth-wrapper {
    width: 120px;
    height: 134px;
    background: transparent;
    position: absolute;
    left: 50%;
    top: 59px;
    margin-left: -60px;
    overflow: hidden;
}

.mouth {
    width: 120px;
    height: 460px;
    background: #9B010B;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -60px;
    border-radius: 50%;
    border: 2px solid black;
    overflow: hidden;
}

.mouth::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 110px;
    height: 110px;
    background: #FF4860;
    left: 50%;
    margin-left: -55px;
    border-radius: 50%;
}
/*画好了*/`;

var time = 20;
writeCode("", baseStr);
changeSpeed();

function changeSpeed() {
    $("#changeSpeed").on("click", "button", function(e) {
        let $speedBtns = $(e.currentTarget);
        let speed = $speedBtns.attr("data-speed");
        $speedBtns
            .addClass("active")
            .siblings(".active")
            .removeClass("active");
        switch (speed) {
            case "slow":
                time = 100;
                break;
            case "normal":
                time = 20;
                break;
            case "fast":
                time = 5;
                break;
        }
    });
}

function writeCode(preStr, addStr, fn) {
    var currentStr = preStr || "";
    var n = 0;
    let id;
    id = setTimeout(function run() {
        n += 1;
        currentStr += addStr.slice(n - 1, n);
        htmlCode.innerHTML = Prism.highlight(currentStr, Prism.languages.css);
        cssCode.innerHTML = currentStr;
        htmlCode.scrollTop = htmlCode.scrollHeight;
        if (n < addStr.length) {
            id = setTimeout(run, time);
        } else {
            fn && fn.call();
        }
    }, time);
}
