<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Legal Notice | The Popcorn Awakens!</title>
  <link id="main-css" rel="stylesheet" href="<?php echo css_dir; ?>theme.css" />
  <link rel="icon" type="image/x-icon" href="<?php echo images_dir; ?>favicon.ico">
</head>
<body>
    <header class="main-header">

        <div class="header-row">
          <a href="index.php">
          <img src="<?php echo images_dir; ?>/logo.svg" alt="Robot holding a popcorn bucket, The Popcorn Awakens logo" class="logo" /></a>
          <div class="header-right">
            <nav class="navbar" aria-label="Main Navigation" id="menu">
             
            </nav>
            <h1 class="title">The Popcorn Awakens!</h1>
          </div>
        </div>
    
      </header>
  <section class="legal_notice">
    <h2 class="section-title">Legal Notice</h2>

    <div class="legal-content">
      
      
      <article class="legal-item">
        <h3>1. Website Information</h3>
        <p>The website <strong>The Popcorn Awakens!</strong> is a platform dedicated to sci-fi movies, providing information, reviews, and recommendations. The Site may use third-party APIs to display movie data.</p>
      </article>

      
      <article class="legal-item">
        <h3>2. Personal Data &amp GDPR Compliance</h3>
        <p>In accordance with the General Data Protection Regulation (GDPR), we inform users that the only personal data collected and stored is email addresses (if voluntarily provided through newsletter subscriptions or contact forms).</p>
        <p>Your email will never be shared or sold to third parties. You may request the deletion of your data at any time by contacting us at <span class="contact-info">[email]</span>.</p>
      </article>

      
      <article class="legal-item">
        <h3>3. Copyright &amp Third-Party Content</h3>
        <p>All movie titles, images, and descriptions displayed on the Site are sourced from an external movie database API and remain the property of their respective owners.</p>
        <p>This website does not host, stream, or distribute copyrighted content. Any trademarks, logos, or intellectual property mentioned on the Site belong to their respective owners. If you believe any content violates your rights, please contact us.</p>
      </article>

      
      <article class="legal-item">
        <h3>4. Third-Party APIs</h3>
        <p>The Site utilizes external APIs to fetch movie-related information. While we strive for accuracy, we do not control or guarantee the completeness of the data retrieved.</p>
        <p>For any legal inquiries, you can contact us at: <span class="contact-info">[Email]</span>.</p>
      </article>

      <div class="button-back-arrow">
          <a href="index.php" class="back-home-link">
            <img src="<?php echo images_dir; ?>/backhome.webp" alt="Back to Home" class="back-arrow" />
          </a>
      </div>

    </div>
  </section>

 <?php include ('layout/footer.php'); ?>

  <script defer src="<?php echo js_dir; ?>theme.js"></script>
</body>
</html>
