// SoapUI
// html <head>要import
// <script src="js/jquery.soap.js"></script>

function startCamera(view) {
    $.soap({
        url: "/cgi-bin/ctrl_service",   //輸入web service的URL
        method: "vis:StartView",    //輸入方法
        data: { view: view },   //輸入資料，沒資料也要填{}
        envAttributes: { "xmlns:vis": "http://vision.forestry.xxx/" },   //方法tag的source url
        appendMethodToURL: false,   //是否將方法直接加入URL後端，通常為false
        success: function(response) {
            //web service的回傳資料
            console.log(response);
        }
    });
}