<?php

define ('ENV', 'dev');
// define ('ENV', 'local');

require_once('database.php');

if (ENV == "local") {
    define ("css_dir", "http://popcorn.local/dist/css/");
    define ("js_dir", "http://popcorn.local/dist/js/");
    define ("images_dir", "http://popcorn.local/images/");
    define ("BASE_URL", "http://popcorn.local/php/"):

} else {
    define ("css_dir", "https://nunoluis.afecdax.ovh/dist/css/");
    define ("js_dir", "https://nunoluis.afecdax.ovh/dist/js/");
    define ("images_dir", "https://nunoluis.afecdax.ovh/images/");
    define ("BASE_URL", "https://nunoluis.afecdax.ovh/php/"):
}
