<?php

session_start();
$connection = mysqli_connect('localhost','root','');

mysqli_select_db($connection, 'sistema_usuarios');

$email = $_POST['correo_usuario_name'];
$password = $_POST['password_usuario_name'];

$query_select = "select * from usuarios where correo = '$email' && password = '$password'";

$result = mysqli_query($connection, $query_select);

$num = mysqli_num_rows($result);

if($num == 1){
    echo "<script>alert('bienvenido $email')</script>";
    $_SESSION['username'] = 
    header('location:../front-end/home.html');
}else {
    echo "<script>alert('El usuario no existe')</script>";
    header('location:../front-end/');
}
?>