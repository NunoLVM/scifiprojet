<?php
require_once("config/settings.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="The Popcorn Awakens | Sign Up for epic sci-fi experiences. Join our universe of movies and series, and get exclusive access to futuristic content." />
  <meta name="author" content="Nuno Antonio" />
  <meta name="keywords" content="sci-fi, signup, form, movies, series, futuristic" />
  <title>The Popcorn Awakens | Sign Up</title>
  <link id="main-css" rel="stylesheet" href="<?php echo css_dir; ?>theme.css" />
  <link rel="icon" type="image/x-icon" href="<?php echo images_dir; ?>favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
</head>

<body>
  <?php include ('layout/header.php'); ?>

  <main>
    <section class="intro">
      <h2>You’ve Taken the Red Pill — Let’s Go Deeper</h2>
      <p>
        Join the Universe of Sci-Fi Cinema. Dive into a universe where classic and cult sci-fi films converge into a
        single portal for movie lovers.
        Sign up now to unlock personalized film recommendations, engage in intergalactic discussions, and discover
        hidden gems from galaxies far, far away.
        Simply fill in your details below to start your adventure among the stars!
      </p>
    </section>

    <section class="signup">
      <div class="signup-form-container">
        <div class="signup-header">
          <div class="icon-container">
            <img src="<?php echo images_dir; ?>/user_icon3.webp" alt="Sci‑Fi Icon" class="signup-icon" />
          </div>
          <div class="text-container">
            <h3>Access Granted: Create Your Account</h3>
          </div>
        </div>
        <form action="process_signup.php" method="post" aria-label="Sign Up Form">
          <div class="form-group">
            <label for="username">Choose your codename</label>
            <input type="text" id="username" name="username" placeholder="Enter call sign" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Transmission address required" required />
          </div>
          <div class="form-group">
            <label for="password">Create launch code</label>
            <input type="password" id="password" name="password" placeholder="Enter your access key" required
              minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters" />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm launch code:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your access key"
              required />
          </div>
          <div class="button-arrow-group">
            <button type="submit" class="button">Finalize Entry Protocol</button>

            <div class="signup-message">
              <p class="terminal-line line-1">New recruit detected.</p>
              <p class="terminal-line line-2">Credentials locked and verified.</p>
            </div>

            <a href="index.php" class="back-home-link">
              <img src="<?php echo images_dir; ?>/backhome.webp" alt="Back to Home" class="back-arrow" />
            </a>
          </div>
        </form>


      </div>
    </section>
  </main>

 <?php include ('layout/footer.php'); ?>

  <script defer src="<?php echo js_dir; ?>theme.js"></script>
</body>

</html>