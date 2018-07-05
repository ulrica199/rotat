/*
* @Author: 11740
* @Date:   2018-07-02 20:24:28
* @Last Modified by:   11740
* @Last Modified time: 2018-07-02 21:23:25
*/
var wrap = document.querySelector(".wrap");
        var next = document.querySelector(".arrow_right");
        var prev = document.querySelector(".arrow_left");
        next.onclick = function () {
            next_pic();
        }
        prev.onclick = function () {
            prev_pic();
        }
        function next_pic () {
            var newLeft = parseInt(wrap.style.left)-600;
            wrap.style.left = newLeft + "px";
        }
        function prev_pic () {
            var newLeft = parseInt(wrap.style.left)+600;
            wrap.style.left = newLeft + "px";
        }