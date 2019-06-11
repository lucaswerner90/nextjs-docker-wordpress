<?php
/*
Plugin Name: Advanced Custom Fields: Multiple Fields per row
Plugin URI: https://www.openhost.co.za
Description: Add-on to Advanced Custom fields (ACF) for showing multiple ACF fields in a single row on front-end. Great for short text fields or having 2x date fields next to each other. Once activated, 'Row' field will be available under the 'Edit Field Group' section in ACF field types.
Version: 1.0.72
Author: Unihost
Author URI: https://www.openhost.co.za
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.txt
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
  die;
}

  // only include add-on once
  if( !function_exists('acf_register_row_field') ):


    function acf_register_row_field()
    {
      require_once('acf-row-v4.php');
    }
    // add action to include field
    add_action('acf/register_fields', 'acf_register_row_field');


    function load_textdomain_acf_row() {
      load_plugin_textdomain( 'acf-row', false, dirname( plugin_basename( __FILE__ ) ) . '/lang/' );
    }
    add_action( 'plugins_loaded', 'load_textdomain_acf_row' );

    function include_field_types_row( $version ) {

      include_once('acf-row-v5.php');

    }
    add_action('acf/include_field_types', 'include_field_types_row');
  endif;
