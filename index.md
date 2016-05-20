---
layout: page
comments: false
title: beautiful javascript image gallery for your website
descriptionXXX: nanoGALLERY2 is a touch enabled and fully responsive image gallery with justified, cascading and grid layout.<br>It supports self hosted images and pulling in Flickr, Picasa and Google+ photo albums.
display_logo: true
search_omit: true
text_rotator: true
---

<script>
  $(document).ready(function () {

    jQuery("#nanoGalleryHead").css('visibility','visible').nanoGallery({
      //userID:'34858669@N00',kind:'flickr',
      //blackList:'doors|kampuchea|vietnam|thailand|laos|yunnan',
      
      // kind: 'picasa',
      // userID:'111186676244625461692',
      // blackList:'profil|scrapbook|Forhomepage',
      
      
      itemsBaseURL:             'https://source.unsplash.com/',
      items: [
        // ################# album PEOPLE
        {
          src: '2FrX56QL7P8', srct: '2FrX56QL7P8/300x200',
          title: 'people',
          kind: 'album', ID: 1, albumID: 0
        },
        {
          src: 'LyeduBb2Auk', srct: 'LyeduBb2Auk/133x200',
          title: 'by Roksolana Zasiadko',
          ID: 1000, albumID: 1
        },
        {
          src: 'uAgLGG1WBd4', srct: 'uAgLGG1WBd4/300x200',
          title: 'by Scott Webb',
          kind: 'image', ID: 1001, albumID: 1
        },
        {
          src: 'tBtuxtLvAZs', srct: 'tBtuxtLvAZs/300x200',
          title: 'by Matthew Wiebe',
          kind: 'image', ID: 1002, albumID: 1
        },
        {
          src: 'FhHGPO3aMsU', srct: 'FhHGPO3aMsU/300x200',
          title: 'by María Matteo Paganelli',
          kind: 'image', ID: 1004, albumID: 1
        },
        {
          src: 'uDAA35_fzcs', srct: 'uDAA35_fzcs/300x200',
          title: 'by Elijah Hail',
          kind: 'image', ID: 1005, albumID: 1
        },
        {
          src: 'IJ25m7fXqtk', srct: 'IJ25m7fXqtk/300x200',
          title: 'by Rodion Kutsaev',
          kind: 'image', ID: 1006, albumID: 1
        },
        {
          src: 'E9PJO_vL3E8', srct: 'E9PJO_vL3E8/396x200',
          title: 'by Todd Quackenbush',
          kind: 'image', ID: 1007, albumID: 1
        },
        {
          src: '8jqna7aA-vs', srct: '8jqna7aA-vs/300x200',
          title: 'by Abigail Keenan',
          kind: 'image', ID: 1008, albumID: 1
        },
        {
          src: 'Dwheufds6kQ', srct: 'Dwheufds6kQ/300x200',
          title: 'by Joshua Earle',
          kind: 'image', ID: 1009, albumID: 1
        },
        {
          src: 'v41pwp_RRJU', srct: 'v41pwp_RRJU/300x200',
          title: 'by Matthew Wiebe',
          kind: 'image', ID: 1010, albumID: 1
        },
        {
          src: 'DwTZwZYi9Ww', srct: 'DwTZwZYi9Ww/267x200',
          title: 'by Ilham Rahmansyah',
          kind: 'image', ID: 1011, albumID: 1
        },
        {
          src: '2FrX56QL7P8', srct: '2FrX56QL7P8/300x200',
          title: 'by Alexander Shustov',
          kind: 'image', ID: 1012, albumID: 1
        },
        {
          src: 'pwaaqfoMibI', srct: 'pwaaqfoMibI/302x200',
          title: 'by Tina Rataj',
          kind: 'image', ID: 1013, albumID: 1
        },
        {
          src: 'CMOa3H1SXG0', srct: 'CMOa3H1SXG0/133x200',
          title: 'byChristopher Sardegna',
          kind: 'image', ID: 1014, albumID: 1
        },
        {
          src: 'rHv6C-WTOls', srct: 'rHv6C-WTOls/300x200',
          title: 'by Ali Inay',
          kind: 'image', ID: 1015, albumID: 1
        },
        {
          src: '5tniytQs68E', srct: '5tniytQs68E/355x200',
          title: 'by Lechon Kirb',
          kind: 'image', ID: 1016, albumID: 1
        },
        {
          src: '2TlAsvhqiL0', srct: '2TlAsvhqiL0/300x200',
          title: 'by Eutah Mizushima',
          kind: 'image', ID: 1017, albumID: 1
        },
        {
          src: 'hiAdjnXZxl8', srct: 'hiAdjnXZxl8/300x200',
          title: 'by Benjamin Combs',
          kind: 'image', ID: 1018, albumID: 1
        },
        {
          src: 'J8k-gzI0Zy0', srct: 'J8k-gzI0Zy0/326x200',
          title: 'by Linh Nguyen',
          kind: 'image', ID: 1019, albumID: 1
        },
        {
          src: 'yvx7LSZSzeo', srct: 'yvx7LSZSzeo/300x200',
          title: 'by Lechon Kirb',
          kind: 'image', ID: 1020, albumID: 1
        },
        {
          src: 's00F6-W_OQ8', srct: 's00F6-W_OQ8/300x200',
          title: 'by Joshua Earle',
          kind: 'image', ID: 1021, albumID: 1
        },
        {
          src: 'Ixp4YhCKZkI', srct: 'Ixp4YhCKZkI/355x200',
          title: 'by Steve Carter',
          kind: 'image', ID: 1022, albumID: 1
        },
        
        
        // ################# album CITIES
        {
          src: '-icmOdYWXuQ', srct: '-icmOdYWXuQ/300x200',
          title: 'cities',
          kind: 'album', ID: 2, albumID: 0
        },
        {
          src: '-icmOdYWXuQ', srct: '-icmOdYWXuQ/300x200',
          title: 'by Kevin Young',
          ID: 2000, albumID: 2
        },
        {
          src: 'T72-kQyQxtA', srct: 'T72-kQyQxtA/222x200',
          title: 'by Jeffrey Swanson',
          ID: 2001, albumID: 2
        },
        {
          src: 'zCevd81eJDU', srct: 'zCevd81eJDU/300x200',
          title: 'by Alexandre Perotto',
          ID: 2002, albumID: 2
        },
        {
          src: 'VviFtDJakYk', srct: 'VviFtDJakYk/300x200',
          title: 'by Matthew Wiebe',
          ID: 2003, albumID: 2
        },
        {
          src: '688Fna1pwOQ', srct: '688Fna1pwOQ/297x200',
          title: 'by Julien Moreau',
          ID: 2004, albumID: 2
        },
        {
          src: 'Y7y7fe8hrh0', srct: 'Y7y7fe8hrh0/300x200',
          title: 'by Nirzar Pangarkar',
          ID: 2005, albumID: 2
        },
        {
          src: 'bITjK6W2Alw', srct: 'bITjK6W2Alw/300x200',
          title: 'by valor kopeny',
          ID: 2006, albumID: 2
        },
        {
          src: 'TZCehSn-T-o', srct: 'TZCehSn-T-o/300x200',
          title: 'by Anders Jildén',
          ID: 2007, albumID: 2
        },
        {
          src: '71cd1rWqO8M', srct: '71cd1rWqO8M/356x200',
          title: 'by Lili Popper',
          ID: 2008, albumID: 2
        },
        {
          src: 'QmemudqzrXQ', srct: 'QmemudqzrXQ/303x200',
          title: 'by Nick Scheerbart',
          ID: 2009, albumID: 2
        },
        {
          src: 'UB7YmsJTEvE', srct: UB7YmsJTEvE/302x200',
          title: 'by Steve Richey',
          ID: 2010, albumID: 2
        },
        {
          src: 'VjmlDjePHjE', srct: 'VjmlDjePHjE/133x200',
          title: 'by Mihail Ribkin',
          ID: 2011, albumID: 2
        },
        {
          src: 'nF4lk-9IJH8', srct: 'nF4lk-9IJH8/133x200',
          title: 'by Anthony DELANOIX',
          ID: 2012, albumID: 2
        },
        {
          src: 'NvGwP_hw1iw', srct: 'NvGwP_hw1iw/300x200',
          title: 'by Joshua K. Jackson',
          ID: 2013, albumID: 2
        },
        {
          src: 'utwYoEu9SU8', srct: 'utwYoEu9SU8/354x200',
          title: 'by freddie marriage',
          ID: 2014, albumID: 2
        },
        {
          src: 'bIQiMWxX_WU', srct: 'bIQiMWxX_WU/266x200',
          title: 'by sergee bee',
          ID: 2015, albumID: 2
        },
        {
          src: 'KBX9XHk266s', srct: 'KBX9XHk266s/300x200',
          title: 'by Vladimir Kudinov',
          ID: 2016, albumID: 2
        },
        {
          src: '2p1HOcpi14U', srct: '2p1HOcpi14U/300x200',
          title: 'by Hide Obara',
          ID: 2017, albumID: 2
        },
        {
          src: 'bLppF5sbXPo', srct: 'bLppF5sbXPo/300x200',
          title: 'by enjamin Combs',
          ID: 2018, albumID: 2
        },
        {
          src: 'v4ZUGlrdVAA', srct: 'v4ZUGlrdVAA/300x200',
          title: 'by Anthony Indraus',
          ID: 2019, albumID: 2
        }
        
        
        
      ],
      //thumbnailWidth:300, thumbnailHeight:200,
      //thumbnailL1Width:'240C xs100C sm100C', thumbnailL1Height:'160C xs100C sm100C',
      thumbnailL1Width:'240 xs100C sm100C', thumbnailL1Height:'160 xs100C sm100C',
      thumbnailWidth:'auto', thumbnailHeight:'200 xs80 sm150 la200 xl200',
      thumbnailHoverEffect:[{'name':'imageScale150', 'duration':700},{'name':'labelAppear75', 'duration':400},{'name':'descriptionAppear', 'duration':1000}],
      
      //maxWidth:948,
      //thumbnailHoverEffect:'labelSlideUpTop,borderLighter',
      //thumbnailHoverEffect:'borderLighter',
      paginationMaxLinesPerPage:1,
      viewerDisplayLogo:true,
      photoSorting:'random',
      albumSorting:'random',
      imageTransition : 'slide',
      galleryToolbarWidthAligned:false,
      thumbnailLabel:{display:false,align:'center', position:'overImageOnMiddle'},
      thumbnailL1Label:{display:true,align:'center', position:'overImageOnMiddle'},
      touchAnimationL1: true,
      touchAnimation:false,
      i18n:{
        thumbnailImageDescription:'display photo', thumbnailImageDescription_FR:'afficher photo',
        thumbnailAlbumDescription:'display gallery', thumbnailAlbumDescription_FR:'afficher galerie'
      },
      viewerToolbar: { standard:'minimizeButton,pageCounter,playPauseButton,linkOriginalButton,label', autoMinimize:5000 },
      galleryFullpageButton:true,
      supportIE8: false,
      paginationDots: true,
      locationHash:true,
      breadcrumbAutoHideTopLevel:true
    });
  });  
</script>


<nav class="pagination" role="navigation">
<a markdown="0" class="btn" href="{{ site.url }}/quick-start/">Start using nGY2</a>
<a markdown="0" class="btn" href="{{ site.url }}/docs/">Documentation</a>
<a markdown="0" class="btnGreen" href="{{ site.url }}/licensing/">Licensing</a>
</nav>

<br>

<blockquote>
<nav class="pagination" role="navigation">
<b>you'll love nanoGALLERY2:</b><br><br><br>
{% include label-feature.html description="great features" %}
{% include label-feature.html description="easy to implement" %}
{% include label-feature.html description="expandable" %}
{% include label-feature.html description="unlimited support" %}
{% include label-feature.html description="open source" %}
<br>
<style>#js-rotating > li {font-size:2.5rem;}</style>
<ul id="js-rotating" style="padding:0px;">
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> gallery</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> lightbox</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> multiple layouts</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> touch enable</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> responsive</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> multi-level albums</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> hover effects</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> transitions</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> pagination</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> API</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> plugins</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> deep linking</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> selectable thumbnails</li>
  <li><img src="{{ site.url }}/images/iconmonstr-check-mark-12.svg" width="25"> RTL / LTR</li>
</ul>
</nav>
</blockquote>

<br><br>

### Get nanoGALLERY2
---

<nav class="pagination" role="navigation">
  {% include btn-image.html href="https://github.com/Kris-B/nanoGALLERY/archive/v5.10.0.zip" url="images/iconmonstr-download-14.svg" description="download zip" %}
  &nbsp;&nbsp;&nbsp;
  {% include btn-image.html href="https://github.com/Kris-B/nanoGALLERY" url="images/iconmonstr-github-1.svg" description="view on github" %}
</nav>

* npm: `npm install nanogallery`  
* link directly to nanoGALLERY2 files on CDNJS:  
{% highlight javascript %}
<link href="http://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/css/nanogallery.min.css" rel="stylesheet">
<script src="http://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/jquery.nanogallery.min.js"></script>
{% endhighlight %}

<br><br><br> 

### Recent blog posts
---

<ul class="post-list">
{% for post in site.categories.blog %} 
  <!-- <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li> -->
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
  
<br><br><br>

### Your review
---
Please rate nanoGALLERY2  and write some words about your usage. Give others some feedback about features, ease of use, documentation, customizability, design, implementation, support...

-

<style>.wpac .wp-btn { margin: 0px !important;}</style>
<div id="wpac-review"></div>
<script type="text/javascript">
wpac_init = window.wpac_init || [];
wpac_init.push({widget: 'Review', id: 223});
(function() {
    if ('WIDGETPACK_LOADED' in window) return;
    WIDGETPACK_LOADED = true;
    var mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src = 'https://app.widgetpack.com/widget.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
})();
</script>
<a href="https://widgetpack.com" class="wpac-cr">Reviews System WIDGET PACK</a>

