<?php
/**
 * Plugin Name:       My Custom Block
 * Description:       A Gutenberg block plugin for your project.
 * Version:           1.0.0
 * Author:            Harshit
 */

function my_custom_block_register_block() {
    // Automatically load dependencies and version
    $asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

    wp_register_script(
        'my-custom-block-editor-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type(__DIR__, [
        'editor_script' => 'my-custom-block-editor-script',
    ]);
}
add_action('init', 'my_custom_block_register_block');