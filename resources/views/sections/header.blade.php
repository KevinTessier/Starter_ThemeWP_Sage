<header class="header header__primary" role="banner">
  <section class="header__container">
    <a class="brand" href="{{ home_url('/') }}">
      <img class="logo--primary" width="320" height="auto" src="/app/themes/kt-theme/resources/images/logo.svg" alt="logo principal">
    </a>


    <div class="burger-main_menu-container">
      <button type="button" aria-expanded="false" aria-controls="primary-menu" aria-label="Toggle Menu" class="menu-toggle burger-main_menu">
        <span class="sr-only">Open menu</span>

        <svg class="block h-6 w-6 burger-main_menu-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="false">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <svg class="hidden h-6 w-6 burger-main_menu-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    @if (has_nav_menu('primary_navigation'))
      <nav class="navbar navbar--primary" role="navigation" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu([
          'theme_location' => 'primary_navigation',
          'menu_id'        => 'primary-menu',
          'menu_class'     => 'navbar__links',
          'container'      => false,
          'echo'           => false,
          'walker'         => new App\Walkers\kt_Walker_Nav_Menu(),
          ]) !!}
      </nav>
    @endif

  </section>
</header>
