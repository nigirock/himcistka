<?php
$recepient = "nigirock124@gmail.com";
$sitename = "������ ����";

$name = trim($_POST["name"]);
$text = trim($_POST["text"]);
$message = "���: $name \n���������: $text";

$pagetitle = "����� ����� � �����";
mail($recepient,$pagetitle,$message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");