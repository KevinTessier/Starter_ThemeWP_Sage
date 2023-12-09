@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
  @endwhile
@endsection

<div class="lg:grid-cols-4 grid sm:grid-cols-3 grid-cols-2">
</div>
