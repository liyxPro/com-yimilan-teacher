function videoPlay(videos,playBtn,videoUrl,vbs){
        function isPlay(){
            var netWorkState=navigator.connection.type;
            ifPlay=false;
            if(netWorkState){
                switch (netWorkState){
                    case "wifi":
                    ifPlay=true;
                    break;
                    case "2g":
                    ifPlay=false;
                    break;
                    case "3g":
                    ifPlay=false;
                    break;
                    case "4g":
                    ifPlay=false;
                    break;
                }
            }else{
                ifPlay=true;
            }
            return ifPlay;
        }   
    function launchFullscreen(element,videoBoxs) {
        //异步不能用，火狐pc不能播放
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.msRequestFullscreen){ 
            element.msRequestFullscreen(); 
        } else if(element.oRequestFullscreen){
            element.oRequestFullscreen();
        } else if(element.webkitRequestFullscreen){
            element.webkitRequestFullScreen();
        }else{
            document.IsFullScreen = true;
        }
        element.play();
    }
        /**
         * 
         反射調用
        var invokeFieldOrMethod = function(element, method) {
            var usablePrefixMethod;
            ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
                if (usablePrefixMethod) return;
                if (prefix === "") {// 无前缀，方法首字母小写
                    method = method.slice(0,1).toLowerCase() + method.slice(1); 
                }
                var typePrefixMethod = typeof element[prefix + method];
                if (typePrefixMethod + "" !== "undefined") {
                    if (typePrefixMethod === "function") {
                        usablePrefixMethod = element[prefix + method]();
                    } else {
                        usablePrefixMethod = element[prefix + method];
                    }
                }
            });
            return usablePrefixMethod;
        };
        */
        //退出全屏
        function exitFullscreen(){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.oRequestFullscreen){
                document.oCancelFullScreen();
            }else if (document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }else{
                document.IsFullScreen = false;
            }
        }
    document.getElementById(playBtn).onclick=function(){
            //isPlay()
            function videoPlaying(){
                $("#"+videos).attr("src",videoUrl);
                $("#"+playBtn).css("display","none");
                launchFullscreen(document.getElementById(videos)); 
                $("#"+videos).attr("controls","controls");
                $("#"+videos).on("ended",function(){
                    exitFullscreen(); 
                    $("#"+playBtn).css("display","block");
                    $("#"+videos).attr("controls",false);
                })
            }
            if (isPlay()){
                videoPlaying()
            }else{
                if(confirm("您的网络环境为移动流量，是否确定继续播放")){
                    videoPlaying();
                }else{
                    return;
                }
            }

    }
    /*$("#"+playBtn).on("click",function(){
            //alert(isPlay());
           
    })*/
}
    