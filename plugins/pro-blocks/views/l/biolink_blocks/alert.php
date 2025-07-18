<?php defined('ALTUMCODE') || die() ?>

<?php if(!isset($_COOKIE['dismiss_close_button_' . $data->link->biolink_block_id])): ?>
<div id="<?= 'biolink_block_id_' . $data->link->biolink_block_id ?>" data-biolink-block-id="<?= $data->link->biolink_block_id ?>" class="col-12 my-<?= $data->biolink->settings->block_spacing ?? '2' ?>">
    <div class="alert <?= 'link-btn-' . $data->link->settings->border_radius ?> <?= $data->link->design->link_class ?>" style="<?= $data->link->design->link_style ?>" data-background-color data-border-width data-border-radius data-border-style data-border-color data-border-shadow data-text-alignment data-text-color>

        <?php if($data->link->location_url): ?>
        <a href="<?= $data->link->location_url . $data->link->utm_query ?>" data-track-biolink-block-id="<?= $data->link->biolink_block_id ?>" target="<?= $data->link->settings->open_in_new_tab ? '_blank' : '_self' ?>" class="text-decoration-none" style="<?= 'color: ' . $data->link->settings->text_color . ';' ?>" data-text-color>
        <?php endif ?>

        <span data-icon>
            <?php if($data->link->settings->icon): ?>
                <i class="<?= $data->link->settings->icon ?> mr-1"></i>
            <?php endif ?>
        </span>

        <span data-text><?= $data->link->settings->text ?></span>

        <?php if($data->link->location_url): ?>
        </a>
        <?php endif ?>

        <?php if($data->link->settings->display_close_button): ?>
        <button type="button" class="close ml-2" data-dismiss="alert" onclick="set_cookie('<?= 'dismiss_close_button_' . $data->link->biolink_block_id ?>', 1, <?= $data->link->settings->alert_pause_after_closed / 60 / 24 ?>, '<?= COOKIE_PATH ?>')"><i class="fas fa-fw fa-sm fa-times" style="<?= 'color: ' . $data->link->settings->text_color . '; opacity: .5;' ?>" data-text-color></i></button>
        <?php endif ?>
    </div>
</div>
<?php endif ?>
