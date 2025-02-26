@include('components.navquickly')

@include('sections.header')

<main class="main container min-h-screen" id="main">
  @yield('content')
</main>

@hasSection('sidebar')
  <aside class="sidebar">
    @yield('sidebar')
  </aside>
@endif

{{-- @include('sections.footer') --}}
