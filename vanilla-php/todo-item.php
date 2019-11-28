<?php
declare(strict_types=1);

return function (string $text, array $fromUser, array $toUser) {
    $userImage = function (string $userName, string $userImagePath, string $class) {
        ?>
        <div class="user-image <?= $class ?>">
            <span class="item-label">From</span>
            <img src="<?= $userImagePath ?>" alt="<?= $userName ?>">
        </div>
        <?
    }
    ?>
    <div class="todo-item">
        <button class="done-button">
            <span class="item-label">
                Done
            </span>
        </button>
        <p class="text">
            <?= $text ?>
        </p>
        <div class="user-images">
            <? $userImage($fromUser['name'], $fromUser['imagePath'], 'from') ?>
            <? $userImage($toUser['name'], $toUser['imagePath'], 'to') ?>
        </div>
    </div>
    <?
};
