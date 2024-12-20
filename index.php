<!doctype html>
<html class="sr" <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>

  <body>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>
    <?php echo view(app('sage.view'), app('sage.data'))->render(); ?>
    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
  </body>
</html>
