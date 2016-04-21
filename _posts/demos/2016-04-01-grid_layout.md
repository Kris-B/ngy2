---
layout: demo
title: "grid layout"
modified: 2016-04-01
categories: demos
comments: false
share: true
---

In a grid layout, cells (thumbnails) have the same size. Set a value in pixels to ```thumbnailWidth``` and ```thumbnailHeight```.

Source code:  

{% highlight javascript %}
  $(document).ready(function () {
    $("#myNanoGallery").nanoGallery({
      
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      
      userID: '34858669@N00',
      kind: 'flickr',
      photoset: 'none',

      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
    });
  });
{% endhighlight %}

<script>
  $(document).ready(function () {

    jQuery("#myNanoGallery").css('visibility','visible').nanoGallery({
      //userID:'34858669@N00',kind:'flickr',
      //blackList:'doors|kampuchea|vietnam|thailand|laos|yunnan',
      
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      
      userID: '34858669@N00',
      kind: 'flickr',
      photoset: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],

      viewerDisplayLogo:true,
      photoSorting:'random',
      albumSorting:'random',
      imageTransition : 'slide',
      galleryToolbarWidthAligned:false,
      thumbnailLabel:{display:false,align:'center', position:'overImageOnMiddle'},
      thumbnailL1Label:{display:true,align:'center', position:'overImageOnMiddle'},
      viewerToolbar: { standard:'minimizeButton,pageCounter,playPauseButton,linkOriginalButton,label', autoMinimize:5000 },
      galleryFullpageButton:true,
      supportIE8: false,
      paginationDots: true,
      locationHash:false
    });

  });  
</script>
