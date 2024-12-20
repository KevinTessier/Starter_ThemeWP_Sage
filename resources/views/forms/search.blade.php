<form class="search-form" role="search" method="get" action="{{ home_url('/') }}">
  <label>
    <span class="sr-only">
      {{ _x('Search for:', 'label', 'sage') }}
    </span>

    <input name="s" type="search" value="{{ get_search_query() }}" placeholder="{!! esc_attr_x('Search &hellip;', 'placeholder', 'sage') !!}">
  </label>

  <button>{{ _x('Search', 'submit button', 'sage') }}</button>
</form>
