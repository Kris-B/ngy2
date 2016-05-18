---
layout: page
title: Quick start
categories: firststeps
---
<br>

<h4>Select a method:</h4>
{% for post in site.categories.firststeps %} 
  pipo
  <a markdown="0" class="btn" href="{{ site.url }}{{ post.url }}">{{ post.title }} </a> &nbsp; 
{% endfor %}
  

### First steps

Follow these simple steps to add a gallery to your page. We'll first use the inline method.
  
  
#### 1. Get the script
In this example, we'll use the [CDN](https://cdnjs.com/libraries/nanogallery) version  
But you can also get the script from:  
- [Github](https://github.com/Kris-B/nanoGALLERY/archive/v5.9.1.zip)  
- npmjs: ```npm install nanogallery```  

#### 2. Include it in the ```<head>``` of your page

~~~ javascript
  <head>
    <!-- jQuery - only once per page -->
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  
    <!-- nanoGALLERY2 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/css/nanogallery.min.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/jquery.nanogallery.min.js"></script>
  </head>
~~~
jQUERY must be included, if not already present in your page.

#### 3. Setup your HTML and initialize the nanoGALLERY2 script

~~~ javascript
  <body>
    <!-- THE MARKUP -->
    <div id="myNanoGallery">
      <a href="img_01.jpg" data-ngthumb="img_01t.jpg"  data-ngdesc="Description 1">Image 1</a>
      <a href="img_02.jpg" data-ngthumb="img_02ts.jpg" data-ngdesc="Description 2">Image 2</a>
      <a href="img_03.jpg" data-ngthumb="img_03t.jpg"  data-ngdesc="Description 3">Image 3</a>
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
~~~

  
------------------

### Example
Here's a full working HTML template.

~~~ javascript
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>my first nanoGALLERY2</title>
  <meta name="description" content="my first nanoGALLERY2">
  <meta name="author" content="Christophe Brisbois">

  <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  <link href="http://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/css/nanogallery.min.css" rel="stylesheet">
  <script src="http://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.0/jquery.nanogallery.min.js"></script>  

</head>

<body>
  <h1>my first galery with nanoGALLERY2.</h1>
  
  <div id="myNanoGalleryDemo">
    <a href="C4FV77ovIBM" data-ngthumb="C4FV77ovIBM/300x200" data-ngdesc="Lindsay, Canada">photo by Eric Micheal</a>
    <a href="Kt5hRENuotI" data-ngthumb="Kt5hRENuotI/267x200" data-ngdesc="Quiraing, Portree, United Kingdom">photo by Andrew Ridley</a>
    <a href="-icmOdYWXuQ" data-ngthumb="-icmOdYWXuQ/300x200" data-ngdesc="New York">photo by Kevin Young</a>
  </div>


  <script>
    $(document).ready(function () {
      jQuery("#myNanoGalleryDemo").css('visibility','visible').nanoGallery({
        itemsBaseURL:'https://source.unsplash.com/',
        thumbnailWidth:'auto', thumbnailHeight:200,
        thumbnailHoverEffect:[{'name':'imageScale150', 'duration':700},{'name':'labelAppear75', duration':400},{'name':'descriptionAppear', 'duration':1000}],
        viewerDisplayLogo:true,
        thumbnailL1Label:{display:true,align:'center', position:'overImageOnMiddle'},
        i18n:{
          thumbnailImageDescription:'view photo', thumbnailImageDescription_FR:'afficher photo',
          thumbnailAlbumDescription:'open gallery', thumbnailAlbumDescription_FR:'ouvrir galerie'
        }
      });
    });  
  </script>
</body>
</html>
~~~

### Result:

<div id="myNanoGalleryDemo">
  <a href="C4FV77ovIBM" data-ngthumb="C4FV77ovIBM/300x200" data-ngdesc="Lindsay, Canada">photo by Eric Micheal</a>
  <a href="Kt5hRENuotI" data-ngthumb="Kt5hRENuotI/267x200" data-ngdesc="Quiraing, Portree, United Kingdom">photo by Andrew Ridley</a>
  <a href="-icmOdYWXuQ" data-ngthumb="-icmOdYWXuQ/300x200" data-ngdesc="New York">photo by Kevin Young</a>
</div>


<script>
  $(document).ready(function () {
    jQuery("#myNanoGalleryDemo").css('visibility','visible').nanoGallery({
      itemsBaseURL:'https://source.unsplash.com/',
      thumbnailWidth: 'auto',
      thumbnailHeight: 200,
      thumbnailHoverEffect: 'imageScale150',
      viewerDisplayLogo:true
      thumbnailL1Label: {align:'center'}  //, position:'overImageOnMiddle'}
    });
  });  
</script>



