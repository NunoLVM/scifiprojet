  <header class="main-header">

  <div class="header-row">
      <a href="index.php" title="">
        <img src="<?php echo images_dir; ?>/logo.svg" alt="Robot holding a popcorn bucket, The Popcorn Awakens logo" class="logo" />
      </a>
      <div class="header-right">
        <div id="closeMenu">
          <svg viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"
              fill="currentColor" />
          </svg>
        </div>
        
        <?php include ('layout/mainmenu.php'); ?>

        <h1 class="title">The Popcorn Awakens!</h1>
      </div>
      <!-- Btn to show menu on mobile device -->
      <div id="openMenu">
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_105_1724)">
            <path d="M3 6.00098H21M3 12.001H21M3 18.001H21" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" />
          </g>
          <defs>
            <clippath id="clip0_105_1724">
              <rect fill="currentColor" height="24" transform="translate(0 0.000976562)" width="24" />
            </clippath>
          </defs>
        </svg>
      </div>
    </div>
</header>