<?php
declare(strict_types=1);

const TEMPLATE_ROOT = __DIR__;

function _t(string $path, ...$args): void
{
    $view = require TEMPLATE_ROOT . $path;
    $view(...$args);
}

$text = '19日の午前10時に課長の田中さんに、新規サイトの進捗をメールで伺う';
$toUser = [
    'name' => 'Mike',
    'imagePath' => '/imgs/animal_deer.png',
];
$fromUser = [
    'name' => 'Jane',
    'imagePath' => '/imgs/animal_panda.png',
];
?>

<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/main.css">
</head>
<body>
<div class="container">
    <div class="app">
        <div class="todo-item new-todo">
            <button class="add-button">
                <span class="item-label">Add</span>
            </button>
            <input type="text">
            <div class="user-image from">
                <span class="item-label">To</span>
                <img src="/imgs/animal_deer.png" alt="">
            </div>
        </div>
        <div class="todo-items mt-10">
            <? _t('/todo-item.php', $text, $toUser, $fromUser) ?>
        </div>
    </div>
</div>
</body>
</html>
