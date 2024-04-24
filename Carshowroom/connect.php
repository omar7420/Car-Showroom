<?php

    if (isset($_POST['Submit'])) {
    if (isset($_POST['carManufacture']) 
	&& isset($_POST['carModelName']) 
	&& isset($_POST['yourAddress']) 
	&& isset($_POST['yourEmail']) 
	&& isset($_POST['contactNumber'])) {
        
        $Submit = $_POST['Submit'];
        $carManufacture = $_POST['carManufacture'];
        $carModelName = $_POST['carModelName'];
        $yourAddress = $_POST['yourAddress'];
        $yourEmail = $_POST['yourEmail'];
        $contactNumber = $_POST['contactNumber'];
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "password";
        $dbName = "car order";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT yourEmail FROM orders WHERE yourEmail = ? LIMIT 1";
            $Insert = "INSERT INTO register(carManufacture, carModelName, yourAddress, yourEmail, contactNumber)
			values(?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $yourEmail);
            $stmt->execute();
            $stmt->bind_result($resultyourEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("ssssi",$carManufacture, $carModelName, $yourAddress, $yourEmail, $contactNumber);
                if ($stmt->execute()) {
                    echo "New record inserted successfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}


?>