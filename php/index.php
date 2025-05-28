<?php
require_once("config/settings.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Your ultimate sci-fi movie hub. Explore a galaxy of films and series, track your watchlist, and stay updated with the latest sci-fi news. May the movies be with you!" />
  <meta name="author" content="Nuno Antonio" />
  <meta name="keywords" content="sci-fi, movies, series, watchlist, futuristic, space, robots, dystopian">
  <title>The Popcorn Awakens | Discover Epic Sci-Fi Movies &amp; Series</title>
  <link id="main-css" rel="stylesheet" href="<?php echo css_dir; ?>theme.css?<?php echo time(); ?>" />
  <link rel="icon" type="image/x-icon" href="<?php echo images_dir; ?>favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
</head>
<body>

  <?php include ('layout/header.php'); ?>

  <main id="main-content">


    <div class="container">
      <section class="intro">
        <h2>Welcome to The Popcorn Awakens!</h2>
        <p>Your prime destination for sci-fi cinema and games—where the Force is strong, the truth is out there, and resistance to binge-watching (or one more level) is futile. From dystopian futures to intergalactic rebellions, we’ve got the films and video games that will transport you to galaxies far, far away—or just make you question reality. So, strap in, engage the hyperdrive, and let's explore the universe of sci-fi, one story at a time!</p>
      </section>
      <section class="search">
        <form name="searchForm" class="search_form" action="search.php" method="post" aria-label="Search Movies">
          <div class="search_icon">
            <img src="<?php echo images_dir; ?>/search_icon.svg" alt="Search Icon">
          </div>
          <div class="search_control">
            <input type="text" name="query" placeholder="This is the Way… to Find Your Next Movie or Game!"
              aria-label="Search for sci-fi movies and series">
          </div>
        </form>
      </section>

      
    </div>

 

  </main>
 
<?php include ('layout/footer.php'); ?>

 

  <div class="layer"></div>

 
  <script defer src="<?php echo js_dir; ?>theme.js?<?=time();?>"></script>
</body>

</html>