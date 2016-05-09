---
layout: page
comments: false
title: beautiful image gallery for your website
descriptionXXX: nanoGALLERY2 is a touch enabled and fully responsive image gallery with justified, cascading and grid layout.<br>It supports self hosted images and pulling in Flickr, Picasa and Google+ photo albums.
display_logo: true
search_omit: true
---

<script>
  $(document).ready(function () {

    jQuery("#nanoGalleryHead").css('visibility','visible').nanoGallery({
      //userID:'34858669@N00',kind:'flickr',
      //blackList:'doors|kampuchea|vietnam|thailand|laos|yunnan',
      
      kind: 'picasa',
      userID:'111186676244625461692',
      blackList:'profil|scrapbook|Forhomepage',
      
      //thumbnailWidth:300, thumbnailHeight:200,
      //thumbnailL1Width:'240C xs100C sm100C', thumbnailL1Height:'160C xs100C sm100C',
      thumbnailL1Width:'240 xs100C sm100C', thumbnailL1Height:'160 xs100C sm100C',
      thumbnailWidth:'auto', thumbnailHeight:'200 xs80 sm150 la250 xl290',
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
        thumbnailImageDescription:'view photo', thumbnailImageDescription_FR:'afficher photo',
        thumbnailAlbumDescription:'open gallery', thumbnailAlbumDescription_FR:'ouvrir galerie'
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

<br><br> 

> <nav class="pagination" role="navigation">
> <a markdown="0" class="btn" href="{{ site.url }}/first_steps/">Start using nGY2</a>
> <a markdown="0" class="btn" href="{{ site.url }}/options/">Documentation</a>
> <a markdown="0" class="btnGreen" href="{{ site.url }}/options/">Licensing</a>
> </nav>

  
<br><br><br> 
  
### Get nanoGALLERY2

<nav class="pagination" role="navigation">
  {% include btn-image.html href="http://github.com" url="images/iconmonstr-download-14.svg" description="download zip" %}
  &nbsp;&nbsp;&nbsp;
  {% include btn-image.html url="images/iconmonstr-github-1.svg" description="view on github" %}
</nav>

npm: 
{% highlight javascript %}
    npm install nanogallery
{% endhighlight %}
CDN link:  
{% highlight javascript %}
    <link href="http://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/css/nanogallery.min.css" rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/jquery.nanogallery.min.js"></script>
{% endhighlight%}

  
<br><br><br> 

### Recent blog posts  
  
<ul class="post-list">
{% for post in site.categories.blog %} 
  <!-- <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li> -->
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
  
<br><br><br>

### Your review  
Please rate nanoGALLERY2  and write some words about your usage. Give others some feedback about features, ease of use, documentation, customizability, design, implementation, support...

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

