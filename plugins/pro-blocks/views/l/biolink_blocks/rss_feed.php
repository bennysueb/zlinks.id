<?php defined('ALTUMCODE') || die() ?>

<div id="<?= 'biolink_block_id_' . $data->link->biolink_block_id ?>" data-biolink-block-id="<?= $data->link->biolink_block_id ?>" class="col-12">
    <?php

    /* Caching */
    $cache_instance = cache()->getItem('biolink_block?block_id=' . $data->link->biolink_block_id . '&type=rss_feed');

    /* Set cache if not existing */
    if(is_null($cache_instance->get())) {

        $rss_data = [];

        $rss = @simplexml_load_file($data->link->location_url);

        if($rss) {
            $namespaces = $rss->getNamespaces(true);

            $counter = 0;

            foreach($rss->channel->item as $item) {
                if(isset($namespaces['media'])) {
                    $media_content = $item->children($namespaces['media']);
                    foreach($media_content as $i) {
                        $image = (string)$i->attributes()->url;
                    }
                }

                $rss_data[] = [
                    'title' => (string)$item->title,
                    'link' => (string)$item->link,
                    'image' => $image ?? null,
                ];

                $counter++;
                if($counter >= $data->link->settings->amount) break;
            }
        }

        cache()->save($cache_instance->set($rss_data)->expiresAfter(1800));

    } else {

        $rss_data = $cache_instance->get();

    }

    $counter = 0;
    ?>

    <?php foreach($rss_data as $item): ?>
        <div class="py-<?= $data->biolink->settings->block_spacing ?? '2' ?>">
            <a href="<?= $item['link'] . $data->link->utm_query ?>" target="<?= $data->link->settings->open_in_new_tab ? '_blank' : '_self' ?>" rel="<?= $data->user->plan_settings->dofollow_is_enabled ? 'dofollow' : 'nofollow' ?>" class="btn btn-block btn-primary link-btn <?= ($data->biolink->settings->hover_animation ?? 'smooth') != 'false' ? 'link-hover-animation-' . ($data->biolink->settings->hover_animation ?? 'smooth') : null ?> <?= 'link-btn-' . $data->link->settings->border_radius ?> <?= $data->link->design->link_class ?>" style="<?= $data->link->design->link_style ?>" data-text-color data-border-width data-border-radius data-border-style data-border-color data-border-shadow data-animation data-background-color data-text-alignment>
                <div class="link-btn-image-wrapper <?= 'link-btn-' . $data->link->settings->border_radius ?>" <?= $item['image'] ? null : 'style="display: none;"' ?>>
                    <img src="<?= $item['image'] ?>" style="width: auto;height: 100%;" alt="<?= $item['title'] ?>" loading="lazy" />
                </div>

                <span data-name><?= $item['title'] ?></span>
            </a>
        </div>

        <?php
        $counter++;
        if($counter >= $data->link->settings->amount) break;
        ?>
    <?php endforeach ?>
</div>

