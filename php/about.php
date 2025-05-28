<?php require_once ('config/settings.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Discover the story behind The Popcorn Awakens – where sci‑fi meets fun in a universe of movies, series, and cosmic adventures." />
  <meta name="author" content="Nuno Antonio" />
  <meta name="keywords" content="sci-fi, movies, series, watchlist, futuristic, space, robots, dystopian">
  <title>The Popcorn Awakens | About Our Cosmic Journey</title>
  <link id="main-css" rel="stylesheet" href="<?php echo css_dir; ?>theme.css" />
  <link rel="icon" type="image/x-icon" href="/<?php echo images_dir; ?>/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
</head>

<body>
  <?php include ('layout/header.php'); ?>

  <main id="main-content">
    <div class="container">
      <section class="intro">
        <h2>About The Popcorn Awakens!</h2>
        <p>Hi there — I’m Nuno Antonio, a web development student and unapologetic sci-fi fan since my first contact with a galaxy far, far away. This site is part of my journey as I explore the universe of coding, while sharing my love for all things science fiction.

          The Popcorn Awakens! was born from two passions: movies that warp space and time, and the thrill of building something from scratch. Whether it’s a forgotten classic or a freshly launched interstellar blockbuster, I wanted to create a space where fellow fans can discover, revisit, or geek out over sci-fi cinema.
          
          This project is part of my web development training — an exercise in building structure, interactivity, and a touch of personality into every page. Like Cooper navigating gravity and time in Interstellar, I’m learning how to bend the dimensions of the web (though with slightly less black hole drama).
          
          If you'd like to reach out — to suggest a film, report a bug, or just share your love of sci-fi — don’t hesitate to visit the <a href="contact.php" class="interstellar-glow">contact page.</a> The transmission channel is always open.
          
          So grab your popcorn, power up your curiosity, and let’s navigate this hyperspace of stories together. This is the way.</p>
      </section>

     

      
    </div>


  </main>
 
 

 <?php include ('layout/footer.php'); ?>

 

  <div class="layer"></div>


  <script defer src="<?php echo js_dir; ?>theme.js"></script>
</body>

</html>