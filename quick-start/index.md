---
layout: page
title: Quick start
categories: firststeps
---


# First steps

Follow these simple steps to add a gallery to your page. <b>We'll first use the inline method</b>.
  
  
#### 1. Get the script
In this example, we'll use the [CDN](https://cdnjs.com/libraries/nanogallery) version.  
You can also get the script from:  
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

<br>

------------------

<br>

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
  <h1>my first gallery with nanoGALLERY2.</h1>
  
  <div id="myNanoGalleryDemo">
    <a href="C4FV77ovIBM" data-ngthumb="C4FV77ovIBM/300x200" data-ngdesc="Lindsay, Canada">photo by Eric Micheal</a>
    <a href="Kt5hRENuotI" data-ngthumb="Kt5hRENuotI/267x200" data-ngdesc="Quiraing, Portree, United Kingdom">photo by Andrew Ridley</a>
    <a href="-icmOdYWXuQ" data-ngthumb="-icmOdYWXuQ/300x200" data-ngdesc="New York">photo by Kevin Young</a>
  </div>

  <script>
    $(document).ready(function () {
      jQuery("#myNanoGalleryDemo").nanoGallery({
        itemsBaseURL:             'https://source.unsplash.com/',
        thumbnailWidth:           'auto',
        thumbnailHeight:          200,
        thumbnailHoverEffect:     'imageScale150',
        viewerDisplayLogo:        true,
        thumbnailLabel: {           // options for thumbnailLabel
          align:                  'center'
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
      itemsBaseURL:             'https://source.unsplash.com/',
      thumbnailWidth:           'auto',
      thumbnailHeight:          200,
      thumbnailHoverEffect:     'imageScale150',
      viewerDisplayLogo:        true,
      thumbnailLabel: {           // options for thumbnailLabel
        align:                  'center'
      }
    });
  });  
</script>


<br>

------------------

<br>


# Seconds steps - use an online photo sharing website

In this second example, we'll see how to get images and photosets from <b>Flickr</b> using my own user ID `34858669@N00`.  
To retrieve your personal Flickr user ID, use this page -> [Flickr userID](http://www.flickr.com/services/api/explore/flickr.people.findByUsername)

#### 1. Get the script
In this example, we'll use the [CDN](https://cdnjs.com/libraries/nanogallery) version.  
You can also get the script from:  
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

#### 3. Setup your HTML and initialize the nanoGALLERY2 script

~~~ javascript
  <body>
    <!-- THE MARKUP -->
    <div id="myNanoGalleryFlickr"></div>
    
    <!-- CALL THE GALLERY -->
    <script>
      $(document).ready(function () {
        $("#myNanoGalleryFlickr").nanoGallery({
          kind:     'flickr',
          userID:   '34858669@N00'      // replace this value with your own user ID
        });
      });
    </script>
  </body>
~~~

### Example with Flickr  

Here's a full working HTML template to display your Flickr images.

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
  <h1>my first gallery with nanoGALLERY2.</h1>
  
  <div id="myNanoGalleryFlickr"></div>

  <script>
    $(document).ready(function () {
      jQuery("#myNanoGalleryFlickr").nanoGallery({
        kind:                     'flickr',
        userID:                   '34858669@N00',      // replace this value with your own user ID
        thumbnailWidth:           150,
        thumbnailHeight:          100,
        thumbnailHoverEffect:     'imageScaleIn80',
        viewerDisplayLogo:        true,
        thumbnailLabel: {           // options for thumbnailLabel
          align:                  'center',
          displayDescription:     false
        }
      });
    });  
  </script>
  
</body>
</html>
~~~

### Result:

<div id="myNanoGalleryFlickr"></div>


<script>
  $(document).ready(function () {
    jQuery("#myNanoGalleryFlickr").nanoGallery({
      kind:     'flickr',
      userID:   '34858669@N00',      // replace this value with your own user ID
      thumbnailWidth:           150,
      thumbnailHeight:          100,
      thumbnailHoverEffect:     'imageScaleIn80',
      viewerDisplayLogo:        true,
      thumbnailLabel: {           // options for thumbnailLabel
        align:                  'center',
        displayDescription:     false
      }
    });
  });  
</script>
