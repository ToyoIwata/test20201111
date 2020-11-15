<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>レビューを見る</title>
    <link rel="stylesheet" href="stylesheet.css">
  </head>
  <body>
    <header>
      <div class="header-container">
        <a href="https://www.toyo.ac.jp/ja-JP/" class="header-logo"><b>東洋大学</b></a>
        <div class="header-list-container">
         <a class="header-list" href="index.php">Top Page</a>
         <a class="header-list" href="howto.html">利用方法</a>
         <a class="header-list" href="browse.php">レビューを見る</a>
         <a class="header-list" href="input.php">レビューを書く</a>
         <a class="header-list" href="https://g-sys.toyo.ac.jp/portal/">Toyonet-G</a>
         <a class="header-list" href="mypage.html">マイページ</a>
        </div>
      </div>
    </header>
    <div class="top-wrapper03">
      <div class="top-container">
        <a class="top-logo" href="index.html"><b>東洋大学履修登録支援サイト</b></a>
        <div class="place"><b>レビューを入力する</b></div>
      </div>
    </div>
    <div class="main-wrapper">
      <hr>
      <h1><b>講義レビュー登録完了</b></h1>
      <hr>
      <div class="main-container">
       <div class="thanks-message">レビューの登録ありがとうございます。</div>
        <div class="review-container">
         <div class="review-title"><b>入力内容</b></div>
         <div class="className-container">講義名：<?php echo $_POST['subList']; ?></div>
         <div crass="teacher-container">担当講師：<?php echo $_POST['TeacherName'].'先生'; ?></div>
         <p class="form01">1.担当講師への私的信頼度</p>
          <?php
           $value = $_POST['radio01'];
           if ($value) {
             echo $value;
           }
          ?>
         <p class="form01">2.担当講師への授業内での信頼度</p>
         <?php
          $value = $_POST['radio02'];
          if ($value) {
            echo $value;
          }
         ?>
         <p class="form01">3.講義内資料の見やすさ、わかりやすさ</p>
         <?php
          $value = $_POST['radio03'];
          if ($value) {
            echo $value;
          }
         ?>
         <p class="form01">4.その他、担当講師について</p>
         <?php
          $value = $_POST['comment01'];
          if ($value) {
            echo $value;
          }
         ?>
        </div>
      </div>
    </div>
  <footer>
      <div class="footer-container">
       <a href="index.html" class="footer-logo"><b>東洋大学履修登録支援サイト</b></a>
      <div class="copyright">© 2020 Takeru Iwata
      </div>
  </footer>
 </body>
</html>
