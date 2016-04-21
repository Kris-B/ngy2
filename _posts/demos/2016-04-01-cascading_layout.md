---
layout: demo
title: "cascading layout"
modified: 2016-04-01
categories: demos
comments: false
share: true
---

To display the gallery with a cascading layout, set ```thumbnailHeight``` to ```'auto'``` and set a width in pixels to ```thumbnailWidth```.


Source code:  

{% highlight javascript %}
  $(document).ready(function () {
    $("#myNanoGallery").nanoGallery({
      
      thumbnailWidth: 160,
      thumbnailHeight: 'auto',
      
      thumbnailGutterWidth: 10,
      thumbnailGutterHeight: 10,
      kind: 'picasa',
      userID: '111186676244625461692',
      album: '5911347863561293937',
      maxItemsPerLine: 4,
      
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
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
      
      thumbnailWidth: 160,
      thumbnailHeight: 'auto',
      
      thumbnailGutterWidth: 10,
      thumbnailGutterHeight: 10,
      kind: 'picasa',
      userID: '111186676244625461692',
      album: '5911347863561293937',
      maxItemsPerLine: 4,
      
      
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],

      viewerDisplayLogo:true,
      photoSorting:'random',
      albumSorting:'random',
      imageTransition : 'slide',
      galleryToolbarWidthAligned:false,
      thumbnailLabel:{display:false,align:'center', position:'overImageOnMiddle'},
      thumbnailL1Label:{display:true,align:'center', position:'overImageOnMiddle'},
      viewerToolbar: { standard:'minimizeButton,pageCounter,playPauseButton,linkOriginalButton,label', autoMinimize:5000 },
      supportIE8: false,
      paginationDots: true,
      locationHash:false
    });

  });  
</script>
