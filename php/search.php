<?php
require_once("config/settings.php");

if (isset ($_POST['query'])) {
  $keywords = trim($_POST['query']);
} else {
  $keywords = "";
}

if ($keywords !== '') {
    $sql = "SELECT * FROM fiches WHERE title LIKE :kw";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['kw' => '%' . $keywords . '%']);
    $results = $stmt->fetchAll();
} else {
    $results = [];
}
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
      
        <h2 style="color:white;">Résultats pour votre recherche <?php echo $keywords; ?></h2>
          <?php if ($results): ?>
            <div style="display: flex;gap:20px;flex-wrap:wrap;">
              <?php foreach ($results as $row): ?>
                  <div style="display: flex; flex-direction: column; gap: 10px; color:white;">
                      <img src="<?= htmlspecialchars($row['cover']) ?>" alt="<?= htmlspecialchars($row['title']) ?>" style="max-width:300px;">
                      <h2><?= htmlspecialchars($row['title']) ?></h2>
                      <p><?= nl2br(htmlspecialchars($row['description'])) ?></p>
                      <h3><?= nl2br(htmlspecialchars($row['date_sortie'])) ?>
                  </div>
              <?php endforeach; ?>
              </div>
          <?php else: ?>
              <p>Aucune randonnée trouvée pour « <?= htmlspecialchars($keywords) ?> ».</p>
          <?php endif; ?>

      
    </div>

 

  </main>
 
<?php include ('layout/footer.php'); ?>

 

  <div class="layer"></div>

 
  <script defer src="<?php echo js_dir; ?>theme.js?<?=time();?>"></script>
</body>

</html>