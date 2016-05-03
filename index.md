---
layout: page
comments: true
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

### Download nanoGALLERY2

> ZIP  
> github  
> CDN  


<a markdown="0" class="btn" href="{{ site.url }}/first_steps/">Start uisng nGY2</a>
<a markdown="0" class="btn" href="{{ site.url }}/options/">Documentation</a>
<a markdown="0" class="btnGreen" href="{{ site.url }}/options/">Licensing</a>
  
  
### Recent blog posts  

<ul class="post-list">
{% for post in site.categories.blog %} 
  <!-- <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li> -->
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></li>
{% endfor %}
</ul>
