---
layout: documentation
title: plugins
---

# Content source plugin
Add a custom content source to provides images/albums to nanogallery2.

Filename convention : `jquery.nanogaller2.data.[myContentSource].js`, where [myContentSource] is the name of your content source.


Javascript skeleton:
{% highlight javascript %}
;(function ($) {
  
  if (!$.nanoGallery2.data) {
    $.nanoGallery2.data = {}; // create namespace
  };

  jQuery.nanoGallery2.data.myContentSource = function (instance, fnName){
    var G=instance;      // nanoGALLERY instance

    /* @function AlbumGetContent */
    var AlbumGetContent = function(albumID, fnToCall, fnParam1, fnParam2) {

      /* SCRIPT TO RETRIEVE DATA (=list of images/albums) */
      NGY2Tools.PreloaderDisplay(G, true);
      var sourceContent = myContentSource_GetContent(albumID);
      NGY2Tools.PreloaderDisplay(G, false);
      
      /* SCRIPT TO PARSE DATA */
      var nb=O;
      jQuery.each(sourceContent, function(i, oneContent){
        var itemTitle = oneContent.title;
        var itemDescription = oneContent.desc;
        var itemKind = 'image';
        if( oneContent.image ) {
          nb++;
        }
        else {
          itemKind = 'album';
        }
        var itemID = oneContent.ID;
        var newItem = NGY2Item.New( G, itemTitle, itemDescription, itemID, albumID, itemKind );
        newItem.imageNumber=nb;
        
        newItem.src = ... ;
        newItem.thumbs = ... ;

      });
      G.I[NGY2Item.GetIdx(G, albumID);].contentIsLoaded=true;
    }
  });
      
  switch(fnName){
    case 'GetHiddenAlbums':
      var hiddenAlbums = arguments[2],
      callback = arguments[3];
      GetHiddenAlbums(hiddenAlbums, callback);
      //AlbumsGetContent(option, value)
      break;
    case 'AlbumGetContent':
      var albumID = arguments[2],
      callback = arguments[3],
      cbParam1 = arguments[4],
      cbParam2 = arguments[5];
      AlbumGetContent(albumID, callback, cbParam1, cbParam2);
      break;
    case 'Init':
        Init();
      break;
    case '':
      break;
    case '':
      break;
  }
      
      

  };
  

// END NANOGALLERY2
}( jQuery ));

{% endhighlight %}



Callbacks and javascript helpers provide a simple mechanism to extend the capabilities of nanoGALLERY2.  
How to use callbaks:
{% highlight javascript %}
$(document).ready(function () {
  $("#myNanoGallery").nanoGallery2({
    kind: 'picasa',
    userID: '111186676244625461692',
    fnThumbnailOpen: myFnThumbnailOpen
  });
});

function myFnThumbnailOpen(items) {
  alert('title: ' + items[0].title);
  alert('image url: ' + items[0].src);
  alert('thumbnail url: ' + items[0].thumbImg().src);
  alert('numbre of images: ' + items.length);
}
{% endhighlight %}


| Callback | Description | Script<br>Version |
| ----- | ----- | ----- |
| fnInitGallery | Fired after each gallery construction. ||
| fnThumbnailInit | Fired once after one thumbnail's build. Called for each thumbnail. ||
| fnThumbnailHoverInit | Fired once to initialize the thumbnail hover effect. Called for each thumbnail. ||

<br><br><br>

# API methods
How to use API methods:
{% highlight javascript %}
  $('#myNanoGallery').nanoGallery2('method', options);
{% endhighlight %}

| Method | Option(s) | Description | Script<br>Version |
| ----- | ----- | ----- | ----- |
| destroy | | Removes the gallery. <br>Usage: $('#yourElement').nanoGallery2('destroy');| |
| displayItem | itemID | Displays an item (album or image).<br>Usage: $('#yourElement').nanoGallery2('displayItem', 'itemID');<br>- to display an album: $('#yourElement').nanoGallery2('displayItem', 'albumID')<br>- to display an image: $('#yourElement').nanoGallery2('displayItem', 'albumID/imageID')| |





