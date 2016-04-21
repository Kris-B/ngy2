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
