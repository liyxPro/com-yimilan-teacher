function videoPlay(videos,playBtn,videoUrl){
        function isPlay(){
            var netWorkState=navigator.connection.type;
            ifPlay=false;
            if(netWorkState){
                netWorkState=="wifi"
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
           
           var myVideo=document.getElementById("video1");
            

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
            var docHtml = document.documentElement;
            var docBody = document.body;
            var videobox = document.getElementsByClassName('videoBox')[0];
            var cssText = 'width:100%;height:100%;overflow:hidden;';
            docHtml.style.cssText = cssText;
            docBody.style.cssText = cssText;
            videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
            document.IsFullScreen = true;
        }
        element.play();
    }
    $("#"+playBtn).on("click",function(){
            if (isPlay()){
                $("#"+videos).attr("src",videoUrl);
                launchFullscreen(document.getElementById(videos)); 
            }else{
                if(confirm("您的网络环境为移动流量，是否确定继续播放")){
                    $("#"+videos).attr("src",videoUrl);
                    launchFullscreen(document.getElementById(videos)); 
                }else{
                    return;
                }
            }
    })
}
    