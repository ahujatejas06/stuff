<html>
	<head>
		<title>Forms</title>
	</head>
	<body>
		<?php
		$logged_in = false;
		$username = $_POST["username"];

			if($username == "Tejas") {
				$logged_in = true;
			}else if($username == NULL) {
				echo " ";
			}
			else{
				echo "The username " . $username . " you entered is incorrect." . "<br />" . "Please try again"."<br />";
				$username = NULL;
				sleep(2);
			}
			if($logged_in == true) {
				echo "You are being redirected to the main site";
				sleep(3);
				header("location:index2.php");
  				exit();
			}

		?>
		<form action = "index.php" method="POST">
			User Name:<input type = "text" name="username">
			<br /> <br />
		<input type = "reset" name = "reset">
		<input type = "submit" name = "submit">
		</form>
	</body>
</html>