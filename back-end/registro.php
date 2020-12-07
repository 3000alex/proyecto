<?php

session_start();
$connection = mysqli_connect('localhost','root','');

mysqli_select_db($connection, 'sistema_usuarios');

$email = $_POST['correo_usuario_name'];
$nombre = $_POST['nombre_usuario_name'];
$password = $_POST['password_usuario_name'];

$query_select = "select * from usuarios where correo = '$email'";

$result = mysqli_query($connection, $query_select);

$num = mysqli_num_rows($result);

if($num == 1){
    echo "<script>alert('el correo esta en uso')</script>";
}else {
    $query_insert = "insert into usuarios(nombre, correo, password) values ('$nombre', '$email', '$password')";
    mysqli_query($connection,$query_insert);
}
?>