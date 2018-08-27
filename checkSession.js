$(document).ready(function() {
    // 確認session
    checkTimeout = setTimeout(checkSession, 1830000);   //時間要略大於預設時間，避免沒有自動登出
});

// 確認session
var checkTimeout;   //暫存setTimeout()

function checkSession() {
    $.ajax({
        url: "/cgi-bin/cfg",
        type: "POST",
        dataType: "json",
        cache: false,
        data: { cmd: "get" },
        success: function(response) {
            console.log(response);

            // session過期，自動登出、轉址
            if (response.auth === 0) {
                window.location.href = "/";
            }
        },
        complete: function() {
            setupSessionTimeoutCheck();
        }
    });
}

// 取消上一個setTimeout()，重啟一個新的setTimeout()
function setupSessionTimeoutCheck() {
    clearTimeout(checkTimeout);
    checkTimeout = setTimeout(checkSession, 1830000);
}