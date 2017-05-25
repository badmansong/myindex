<?php 
	$subject = $_POST['subject'];
	$body = $_POST['body'];
	$email = $_POST['email'];
	$name = $_POST['name'];
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>收到資料</title>
</head>
<body>
	<h2>你輸入資料如下</h2>
	姓名:<?php echo $name; ?>;
	Mail:<?php echo $email; ?>;
	主旨:<?php echo $subject; ?>;
	內文:<?php echo $body; ?>;
	<a href="index.html"><input type="bottom" value="回到上一頁"></a>
</body>
</html>