---
layout: page
title: First steps
---
<br>

### First steps

Follow these simple steps to add a gallery to your page.
  
  
#### 1. Get the script
- from Github : [here](https://github.com/Kris-B/nanoGALLERY/archive/v5.9.1.zip)
- from npm: ```npm install nanogallery```

#### 2. Include it in the ```<head>``` of your page

{% highlight javascript %}
  <head>
    <!-- jQuery -->
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  
    <!-- nanoGALLERY2 -->
    <link href="css/nanogallery.min.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="jquery.nanogallery.min.js"></script>
  </head>
{% endhighlight %}
JQUERY is only to be included, if not already present in your page.

#### 3. Setup your HTML and initialize the nanoGALLERY script

{% highlight javascript %}
  <body>
    <!-- THE MARKUP -->
    <div id="myNanoGallery">
      <a href="img_01.jpg" data-ngthumb="img_01t.jpg">Title Image1</a>
      <a href="img_02.jpg" data-ngthumb="img_02ts.jpg" data-ngdesc="Image 2 description">Title Image2</a>
      <a href="img_03.jpg" data-ngthumb="img_03t.jpg" data-ngdesc="Description 3">Title Image3</a>
    </div>
    
    <!-- CALL THE GALLERY -->
    <script>
      $(document).ready(function () {
        $("#myNanoGallery").nanoGallery({
          itemsBaseURL:'http://nanogallery.brisbois.fr/demonstration/'
        });
      });
    </script>
  </body>
{% endhighlight %}




Result:

<div id="myNanoGalleryDemo">
  <a href="C4FV77ovIBM" data-ngthumb="C4FV77ovIBM/300x200">Title Image1</a>
  <a href="Kt5hRENuotI" data-ngthumb="Kt5hRENuotI/267x200" data-ngdesc="Image 2 description">Title Image2</a>
  <a href="-icmOdYWXuQ" data-ngthumb="-icmOdYWXuQ/300x200" data-ngdesc="Description 3">Title Image3</a>
</div>


<script>
  $(document).ready(function () {
    jQuery("#myNanoGalleryDemo").css('visibility','visible').nanoGallery({

          itemsBaseURL:'https://source.unsplash.com/',


      thumbnailWidth:'auto', thumbnailHeight:200,
      //thumbnailL1Width:'240C xs100C sm100C', thumbnailL1Height:'160C xs100C sm100C',
      //thumbnailL1Width:'240 xs100C sm100C', thumbnailL1Height:'160 xs100C sm100C',
      //thumbnailWidth:'auto', thumbnailHeight:'200 xs80 sm150 la250 xl290',
      thumbnailHoverEffect:[{'name':'imageScale150', 'duration':700},{'name':'labelAppear75', 'duration':400},{'name':'descriptionAppear', 'duration':1000}],
      
      viewerDisplayLogo:true,
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
      galleryFullpageButton:false
    });
  });  
</script>



