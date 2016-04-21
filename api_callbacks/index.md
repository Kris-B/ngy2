---
layout: documentation
title: API and callbacks
---

#  Callbacks
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






