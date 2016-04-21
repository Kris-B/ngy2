---
layout: documentation
title: Options and Parameters
---

# Options

nanoGALLERY2 is highly customizable and fully adjustable to suit your needs, without coding.  

How to use options:
{% highlight javascript %}
$(document).ready(function () {
  $("#myNanoGallery").nanoGallery2({
    ...
    thumbnailHeight: 200,
    thumbnailWidth: 300,
    thumbnailAlignment: 'center',
    galleryEnableKeyboard: false,
    ...
  });
});
{% endhighlight %}

List of properties accepted by the nanoGallery2() method:   

## General settings  

-----

| Property | Type | Default | Description | Script<br>Version |
| ----- | ----- | ----- | ----- | ----- |
| theme | string | 'default' |Name of the theme.<br>Note: the corresponding css-file must also be included in the html file.<br>Possible values: 'default', 'clean', 'light' or your custom one. ||
| colorScheme | string<br>object | 'none' | Gallery color scheme (breadcrumb and thumbnails).<br>Possible values: 'none', 'dark','darkRed', 'darkGreen', 'darkBlue', 'darkOrange', 'light', 'lightBackground'<br>Custom color schemes are supported. ||
| RTL | boolean | false | Sets the display direction from Right To Left (RTL). Default is from Left to Right (LTR). ||
| maxItemsPerLine	| integer |	0	| Maximum number of thumbnails per row.<br> Ignored when thumbnailWidth is 'auto'. 0 = disabled.||
| paginationDots | boolean | false | Displays dots for thumbnail pagination instead of page numbers ||
| kind | string | '' | Content storage type.<br>Possible values: '' (inline/API), 'picasa', 'flickr', 'json' ||
| hiddenAlbums | string | '' | List of hidden, including private keys. ||
| galleryRenderStep | integer | 2 | Number of lines to add when the user clicks the `more` button. ||
| galleryDisplayMode | string | 'fullContent' | Gallery display mode: `fullContent`, `pagination`, `moreButton`. ||
| galleryPaginationMode | string | 'rectangles' | What is displayed on the bottom of the gallery when pagination is enabled: `dots`, `rectangles`, `numbers`. ||
| thumbnailForNavigation | boolean | true | Adds a thumbnail to navigate to parent album. ||
| thumbnailBorderVertical | integer | 2 | Width of the top and bottom borders ||
| thumbnailBorderHorizontal | integer | 2 | Width of the left and right borders ||
| thumbnailFeaturedKeyword | string | '*featured' | Keyword to set the feature status of a thumbnail. The keyword is checked in the title and the descirption.   ||
| thumbnailToolbarImage | object | null | For an image's thumbnail: icons to display in the 4 toolbars (top-left, top-right, bottom-left, bottom-right).<br>Possible icons: 'counter', 'share', 'featured', 'select'.<br>Example: `{ topLeft: 'select', topRight : 'share,featured' }  ||
| thumbnailToolbarAlbum | integer |null | For an albums's thumbnail: icons to display in the 4 toolbars. See `thumbnailToolbarImage` for details. ||
| thumbnailDisplayTransition | string | 'slideUp' | Transition used to display each thumbnail.<br>Possible values: 'none', 'fadeIn', 'slideUp', 'slideDown', 'scaleUp', 'scaleDown' ||
| thumbnailDisplayTransitionDuration | integer | 400 | Thumbnail display transition duration in ms. ||
| thumbnailResizeTransition | boolean | true | On page resize: tranisition to re-position the thumbnails. ||
| thumbnailSelectable | boolean | false | Thumbnails can be selectable (check-box) ||
  
  
### Depreciated nanoGALLERY1 options  

| Property | Comment |
| ----- | ----- |
| thumbnailLazyLoad ||
| thumbnailLazyLoadTreshold ||
| itemsSelectable | Replaced by `thumbnailSelectable` |
| keepSelection ||
| showCheckboxes ||
| checkboxStyle ||
| selectMode ||




## Thumbnails

### General settings


### Advanced sizes

### Advanced effects

### 1st navigation level


## Image display


## Gallery toolbar

## Data sources

### Google Photos / Google+

### Flickr

### Self hotsted:

#### Inline method

#### API

#### nanoPhotosProvider



