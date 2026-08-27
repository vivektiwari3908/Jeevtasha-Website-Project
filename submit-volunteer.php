<!-- <?php

include 'db.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name = $_POST['name'];

    $email = $_POST['email'];

    $phone = $_POST['phone'];

    $interest = $_POST['interest'];

    $message = $_POST['message'];

    $sql = "INSERT INTO volunteers
    (name,email,phone,interest,message)

    VALUES
    ('$name','$email','$phone','$interest','$message')";

    if(mysqli_query($conn,$sql)){

        echo "
        <script>

        alert('Volunteer Registration Successful!');

        window.location.href='index.php';

        </script>
        ";

    }else{

        echo mysqli_error($conn);

    }

}

?> -->
