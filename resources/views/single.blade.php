@extends('layouts.app')

@section('content')
  @while (have_posts())
    @php(the_post())
    @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
  @endwhile
@endsection

<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
</div>
