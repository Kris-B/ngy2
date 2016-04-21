---
layout: demo
title: "justified layout"
modified: 2016-04-01
categories: demos
comments: false
share: true
---

To display the gallery with a justified layout, set thumbnailWidth to 'auto' and set a height in pixel to thumbnailHeight.
  
Source code:  

{% highlight javascript %}
  $(document).ready(function () {
    $("#myNanoGallery").nanoGallery({
      
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      
      userID: '111186676244625461692', kind:'picasa',
      album: '5911347863561293937',
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
