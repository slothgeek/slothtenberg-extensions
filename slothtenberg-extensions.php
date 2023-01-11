<?php
/**
 * Plugin Name:       Slothtenberg Extensions
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slothtenberg-extensions
 *
 * @package           sg-block
 */

define( 'SEXT_URL', plugin_dir_url( __FILE__ ) );

function create_block_slothtenberg_extensions_block_init() {
	register_block_type( __DIR__ . '/build' );

	wp_enqueue_style(
		'sext-style',
		SEXT_URL . '/build/style-index.css',
		array(),
		'initial'
	);
}
add_action( 'init', 'create_block_slothtenberg_extensions_block_init' );
