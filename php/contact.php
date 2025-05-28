<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Contact The Popcorn Awakens - Your sci-fi movie hub. Get in touch with us for any questions about movies, series, or website features.">
  <meta name="author" content="Nuno Antonio">
  <meta name="keywords" content="contact, sci-fi, movies, support, help">
  <title>Contact Us</title>
  <link id="main-css" rel="stylesheet" href="<?php echo css_dir; ?>theme.css" />
  <link rel="icon" type="image/x-icon" href="<?php echo images_dir; ?>favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
</head>
<body>
  <?php include ('layout/header.php'); ?>
  <main class="contact">

    <div class="intro">
      <h2>Contact HQ</h2>
    </div>


    <div class="contact-form-container">

      <div class="contact-header">
        <div class="icon-container">

          <img src="<?php echo images_dir; ?>/contact.webp" alt="Contact Icon" class="contact-icon">
        </div>
        <div class="text-container">
          <h3>Transmission log open.</h3>
          <p>Need to reach HQ? Drop a message below - response protocol will activate shortly.</p>
        </div>
      </div>


      <form action="#" method="post" class="contact_form" aria-label="Contact Form">
        <div class="form-group">
          <label for="name">Codename</label>
          <input type="text" id="name" name="name" placeholder="Enter your callsign" required>
        </div>
        <div class="form-group">
          <label for="email">Transmisson ID</label>
          <input type="email" id="email" name="email" placeholder="Enter secure adress" required>
        </div>
        <div class="form-group">
          <label for="subject">Subject line</label>
          <textarea id="subject" name="subject" rows="8" placeholder="Mission, inquiry or distress call" required></textarea>
        </div>
        <div class="button-arrow-group">
                <button type="submit" class="button">Send Transmission</button>

                <div class="signup-message">
                  <p class="terminal-line line-1">Subspace channel secured.</p>
                  <p class="terminal-line line-2">Ready to receive encoded message..</p>
                </div>

                <a href="index.php" class="back-home-link">
                    <img src="<?php echo images_dir; ?>/backhome.webp" alt="Back to Home" class="back-arrow" />
                  </a>
              </div>
      </form>
    </div>
  </main>

  <?php include ('layout/footer.php'); ?>
  <script defer src="<?php echo js_dir; ?>theme.js"></script>
</body>

</html>