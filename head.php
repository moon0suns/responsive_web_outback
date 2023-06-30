<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>05 아웃백</title>
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/animate.min.css">
    <link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <link rel="stylesheet" href="./css/style.css">

    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/swiper-bundle.min.js"></script>
    <script src="./js/custom.js"></script>
</head>

<body>
    <header class="Header">
        <div class="inner">
            <h1>
                <a href="/" class="logo">

                </a>
            </h1>
            <nav class="Gnb">
                <h2 class="blind">메뉴</h2>
               <? include 'nav.php'; ?>
            </nav>
            <ul class="login">
                <li><a href="">로그인</a></li>
                <li><a href="">회원가입</a></li>
            </ul>
        </div>
        <div class="mobile_btn">
            <button>
                <span class="blind">모바일 메뉴</span>
            </button>
        </div>
    </header>