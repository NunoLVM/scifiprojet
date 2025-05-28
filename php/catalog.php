<?php
require_once("config/settings.php");

// Fetch all movies for the catalog
$sql     = "SELECT * FROM fiches ORDER BY date_sortie DESC";
$stmt    = $pdo->query($sql);
$results = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Your ultimate sci-fi movie hub. Browse our full catalog of epic sci-fi films and series." />
  <meta name="author" content="Nuno Antonio" />
  <meta name="keywords" content="sci-fi, movies, series, catalog, futuristic, space, robots, dystopian">
  <title>The Popcorn Awakens | Sci-Fi Movie Catalog</title>
  <link id="main-css" rel="stylesheet" href="<?php echo css_dir; ?>theme.css" />
  <link rel="icon" type="image/x-icon" href="/<?php echo images_dir; ?>/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
</head>

<body>

  <?php include('layout/header.php'); ?>

  <main id="main-content">
    <div class="container">
      <h2 style="color:white; margin-bottom: 1em;">Full Movie Catalog (<?php echo count($results); ?> titles)</h2>

      <?php if ($results): ?>
        <div style="display: flex; gap:20px; flex-wrap:wrap;">
          <?php foreach ($results as $row): ?>
            <div style="display: flex; flex-direction: column; gap: 10px; color:white; width: 300px;">
              <img src="<?= htmlspecialchars($row['cover']) ?>" alt="<?= htmlspecialchars($row['title']) ?>" style="width:100%; height:auto; border-radius: 8px;">
              <h3 style="margin: 0.5em 0 0.2em;"><?= htmlspecialchars($row['title']) ?></h3>
              <small>Released: <?= htmlspecialchars($row['date_sortie']) ?> — <?= htmlspecialchars($row['duree']) ?> min</small>
              <p style="margin-top: 0.5em;"><?= nl2br(htmlspecialchars($row['description'])) ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      <?php else: ?>
        <p style="color:white;">No movies found in the catalog.</p>
      <?php endif; ?>

    </div>
  </main>

  <?php include('layout/footer.php'); ?>

  <div class="layer"></div>
  <script defer src="<?php echo js_dir; ?>theme.js?<?=time();?>"></script>
</body>

</html>