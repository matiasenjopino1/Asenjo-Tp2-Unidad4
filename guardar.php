<?php  

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$tipo = $_POST["tipo"];
$asunto = $_POST["asunto"];
$descripcion = $_POST["descripcion"];

$datos = "Nombre: $nombre\n";
$datos .= "Apellido: $apellido\n";
$datos .= "Telefono: $telefono\n";
$datos .= "Email: $email\n";
$datos .= "Tipo: $tipo\n";
$datos .= "Asunto: $asunto\n";
$datos .= "Descripcion: $descripcion\n";

file_put_contents("contactos.txt", $datos, FILE_APPEND);
echo json_encode([
    "mensaje" => "¡Gracias por contactarte! Tu consulta fue guardada correctamente."
]);
