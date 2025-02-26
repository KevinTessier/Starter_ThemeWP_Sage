<header class="header header__primary">
  <section class="header__container">
    @include('components.logo')

    <div class="burger-main_menu-container">
      @include('components.burger')
    </div>

    @if (has_nav_menu('primary_navigation'))
      <nav class="navbar navbar--primary" role="navigation"
        aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu([
            'theme_location' => 'primary_navigation',
            'menu_id' => 'primary-menu',
            'menu_class' => 'navbar__links',
            'container' => false,
            'echo' => false,
            'walker' => new App\Config\WalkerNavMenu(),
        ]) !!}
      </nav>
    @endif
  </section>
</header>
