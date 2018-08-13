$(document).ready(function() {
    // 設定登入視窗絕對位置
    $(window).resize(function() {
        $("#login").css("left", $(window).width() / 2 - $("#login").width() / 2);
        $("#login").css("top", $(window).height() / 2 - $("#login").height() / 2);
    });

    setTimeout(function() {
        $("#login").css("left", $(window).width() / 2 - $("#login").width() / 2);
        $("#login").css("top", $(window).height() / 2 - $("#login").height() / 2);
        $("#login").show();
        $("#account").focus();
    }, 3000);

    // 設定帳號密碼的 success, error 的特效
    $("#account").blur(function() {
        if ($("#account").val() !== '') {
            $("#check-account").show();
            $("#error-account").hide();
            $("#account-div").removeClass("border-danger").addClass("border-success");
        } else {
            $("#check-account").hide();
            $("#error-account").show();
            $("#account-div").removeClass("border-success").addClass("border-danger");
        }
    });

    $("#password").blur(function() {
        if ($("#password").val() !== '') {
            $("#check-password").show();
            $("#error-password").hide();
            $("#password-div").removeClass("border-danger").addClass("border-success");
        } else {
            $("#check-password").hide();
            $("#error-password").show();
            $("#password-div").removeClass("border-success").addClass("border-danger");
        }
    });

    // 取代預設 submit 方法
    $(this).submit(function(event) {
        event.preventDefault();
        login();
    });

    // 點擊錯誤訊息視窗事件
    $("#invalid").click(function() {
        $("#invalid").hide();
    });
});

// 登入按鈕事件
function login() {
    $.ajax({
        url: "/cgi-bin/auth",
        data: $('form').serialize(),
        type: "POST",
        dataType: 'json',
        cache: false,
        success: function(result) {
            console.log(result);
            if (result.ok == 1) {
                window.location.href = "setting.html";
            } else {
                $("#invalid").show();
                $("#invalid").css("left", $(window).width() / 2 - $("#invalid").width() / 2);
                $("#invalid").css("top", $(window).height() / 2 - $("#invalid").height() / 2);

                $(window).resize(function() {
                    $("#invalid").css("left", $(window).width() / 2 - $("#invalid").width() / 2);
                    $("#invalid").css("top", $(window).height() / 2 - $("#invalid").height() / 2);
                });

                setTimeout(function() {
                    $('#invalid').hide();
                }, 3000);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}