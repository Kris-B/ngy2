/**!
 * @preserve nanoTOC2 v0.1
 * Javascript - Table Of Content by Christophe Brisbois
 * Sources: https://github.com/Kris-B/nanoTOC
 *
 * License: free for all kind of usage. 
 * 
 * Requirements:
 *  - jQuery (http://www.jquery.com) - version >= 1.7.1
 *
 * Components:
 *  - URLIFY.JS (https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js) - is embedded
 */
 
 
// ##########################################
// #####   nanoTOC as a JQUERY PLUGIN   #####
// ##########################################
;(function ($) {
  "use strict";
  jQuery.nanoToc2= function(elt, options){
    // To avoid scope issues, use '_this' instead of 'this'
    // to reference this class from internal events and functions.
    var _this = this;

    // Access to jQuery and DOM versions of element
    _this.$e = $(elt);
    _this.e = elt;

    // Add a reverse reference to the DOM object
    _this.$e.data('nanoToc2', _this);

    _this.init = function(){
      _this.options = $.extend(true, {},$.nanoToc2.defaultOptions, options);
      // Initialization code
      _this.nG= new nanoTOC2();
      _this.nG.Initiate(_this.$e, _this.options );
    };
      
    // Run initializer
    _this.init();
  };


  jQuery.nanoToc2.defaultOptions = {
    widthContent : '75%',
    selectors : 'h1, h2, h3, h4',
    anchorPrefix : '',
    hideTocWidth : 600,
    borderColor : '#fb5',
    activeEltBorderColor : '#fb5'
  };
  
  
  function nanoTOC2() {

    this.Initiate = function( $element, params ) {
      "use strict";
      

      var $documentation=$element;
      $documentation.addClass('nanoTOC_content');
      // $documentation.wrapInner('<div id="nanoTOC_content"></div>');
      // var $content=$documentation.find('#nanoTOC_content');
      // var $sidebar=$('<div id="nanoTOC_sidebar"></div>').appendTo($documentation);
      // var $toc=$('<div id="nanoTOC_toc"></div>').appendTo($sidebar);
      var $content=$documentation;  
//      var $sidebar=$('<div id="nanoTOC_sidebar"></div>');
//      $documentation.after($sidebar);
//      var $toc=$('<div id="nanoTOC_toc"></div>').appendTo($sidebar);
      var $toc=$('<div id="nanoTOC2_toc"></div>').appendTo('#nanoTOC2_current_page');
//      $content.width(params.widthContent);
      $content.css('display','inline-block');
	
//      var style='#nanoTOC_toc .nanotocActive { border-left-color:'+params.borderColor+'; }'+'\n';
//      var style=style+'#nanoTOC_toc { border-left-color:'+params.borderColor+'; }'+'\n';
      // $('#nanoTOC_toc .nanotocActive').css('border-left-color', params.borderColor);

//      jQuery('head').append('<style>'+style+'</style>');

      
  
      // Step 1: assign ID to headings (if needed)
      var anchorTags=[];
      
      var $tocParents=[$toc];
      
      // iterate over the elements
      $content.find(params.selectors).each(function() {
        var $el = $(this);
        var level = parseInt(this.nodeName[1]);
        
        // add ID to element
        var slug=$el.attr('id');
        if( !slug ) {
          anchorTags = anchorTags.slice(0,level-1);
          anchorTags[level-1] = $el.text();
          var slug = params.anchorPrefix + URLify(anchorTags.join('-'));
          $el.attr('id', slug);
        }

        // add elemnt to TOC
        if( !$tocParents[level-1].is( "ul" ) ) {
          var $ul=$('<ul class="side-nav"></ul>').appendTo($tocParents[level-1]);
          $tocParents[level-1]=$ul;
        }
        var $cur=$('<li class="nanotocLevel'+level+'"><a href="#'+slug+'" id="link-'+slug+'">' + $el.text() + '</a></li>').appendTo($tocParents[level-1]);
        $tocParents = $tocParents.slice(0,level);
        $tocParents[level] = $cur;

      });
  
return;  
  
      var $docSections = $content.find(params.selectors);
      var $oldBest;
    
      function manageTOC() {
        if( $documentation.outerWidth(true) <= params.hideTocWidth ) {
          $sidebar.css('visibility','hidden');
        }
        else {
          $sidebar.css('visibility','visible');
        }
      
        var tocVisible=true;
        
        // set position and size of the TOC
        var minHeight=30;
        
        var contentTop = $content.offset().top;      // Get the current coordinates, relative to the document.
        var contentBottom=$content.offset().top+$content.height();
        var scrollY = $(window).scrollTop();    //vertical position of the scroll bar
        if( scrollY >= contentTop ) {
          $toc.toggleClass('fixed', true);
          $toc.css({'left': $sidebar.offset().left});
          if( scrollY >= (contentBottom-minHeight) ) {
            $toc.css('display', 'none');
            tocVisible=false;
          }
          else {
            var h= Math.min($(window).height(), contentBottom-scrollY);
            $toc.css({'top': 0, 'height': h, 'display': 'block'});
          }
        }
        else {
          $toc.removeClass('fixed');
          $toc.css({'width': '', 'height': '', 'display': 'block'});
        }

        // TOC - hilite current section
        if( tocVisible ) {
          var $last=$docSections.eq(0);
          $docSections.each(function(){
            var $this = $(this),
            offset = $this.offset();
            var scrollPos = $(document).scrollTop();  // + 40;
            // if( (offset.top) <= (window.scrollY+150)) {
            if( (offset.top - $this.height()) <= (window.scrollY)) {
              $last=$this;
            }
          });
          
          if( $oldBest && $oldBest.length ) {
            $oldBest.removeClass('nanotocActive');
          }
          $oldBest = $sidebar.find('#link-' + $last.attr("id")).addClass('nanotocActive');
        }
      }
    
      // Position TOC and hilite current section
//      manageTOC();
//      $(window).on("scroll resize", manageTOC );

    }
    
  };

  
  
// END NANOTOC
}( jQuery ));



// URLIFY.JS
// FROM: https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js
// minor correction on regex expression: christophe brisbois
//    Downcoder.regex = new RegExp(Downcoder.chars.join('|'), 'g');
//    -> changed to:
//    Downcoder.regex = new RegExp("[" + Downcoder.chars.join(']|[^' + "]+"), 'g');

/*global XRegExp*/
(function() {
    // 'use strict';

    var LATIN_MAP = {
        'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
        'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I',
        'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O',
        'Õ': 'O', 'Ö': 'O', 'O': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U',
        'Ü': 'U', 'U': 'U', 'Ý': 'Y', 'Þ': 'TH', 'Ÿ': 'Y', 'ß': 'ss', 'à': 'a',
        'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i',
        'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o',
        'ö': 'o', 'o': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'u': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y'
    };
    var LATIN_SYMBOLS_MAP = {
        '©': '(c)'
    };
    var GREEK_MAP = {
        'a': 'a', 'ß': 'b', '?': 'g', 'd': 'd', 'e': 'e', '?': 'z', '?': 'h',
        '?': '8', '?': 'i', '?': 'k', '?': 'l', 'µ': 'm', '?': 'n', '?': '3',
        '?': 'o', 'p': 'p', '?': 'r', 's': 's', 't': 't', '?': 'y', 'f': 'f',
        '?': 'x', '?': 'ps', '?': 'w', '?': 'a', '?': 'e', '?': 'i', '?': 'o',
        '?': 'y', '?': 'h', '?': 'w', '?': 's', '?': 'i', '?': 'y', '?': 'y',
        '?': 'i', '?': 'A', '?': 'B', 'G': 'G', '?': 'D', '?': 'E', '?': 'Z',
        '?': 'H', 'T': '8', '?': 'I', '?': 'K', '?': 'L', '?': 'M', '?': 'N',
        '?': '3', '?': 'O', '?': 'P', '?': 'R', 'S': 'S', '?': 'T', '?': 'Y',
        'F': 'F', '?': 'X', '?': 'PS', 'O': 'W', '?': 'A', '?': 'E', '?': 'I',
        '?': 'O', '?': 'Y', '?': 'H', '?': 'W', '?': 'I', '?': 'Y'
    };
    var TURKISH_MAP = {
        's': 's', 'S': 'S', 'i': 'i', 'I': 'I', 'ç': 'c', 'Ç': 'C', 'ü': 'u',
        'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'g': 'g', 'G': 'G'
    };
    var ROMANIAN_MAP = {
        'a': 'a', 'î': 'i', '?': 's', '?': 't', 'â': 'a',
        'A': 'A', 'Î': 'I', '?': 'S', '?': 'T', 'Â': 'A'
    };
    var RUSSIAN_MAP = {
        '?': 'a', '?': 'b', '?': 'v', '?': 'g', '?': 'd', '?': 'e', '?': 'yo',
        '?': 'zh', '?': 'z', '?': 'i', '?': 'j', '?': 'k', '?': 'l', '?': 'm',
        '?': 'n', '?': 'o', '?': 'p', '?': 'r', '?': 's', '?': 't', '?': 'u',
        '?': 'f', '?': 'h', '?': 'c', '?': 'ch', '?': 'sh', '?': 'sh', '?': '',
        '?': 'y', '?': '', '?': 'e', '?': 'yu', '?': 'ya',
        '?': 'A', '?': 'B', '?': 'V', '?': 'G', '?': 'D', '?': 'E', '?': 'Yo',
        '?': 'Zh', '?': 'Z', '?': 'I', '?': 'J', '?': 'K', '?': 'L', '?': 'M',
        '?': 'N', '?': 'O', '?': 'P', '?': 'R', '?': 'S', '?': 'T', '?': 'U',
        '?': 'F', '?': 'H', '?': 'C', '?': 'Ch', '?': 'Sh', '?': 'Sh', '?': '',
        '?': 'Y', '?': '', '?': 'E', '?': 'Yu', '?': 'Ya'
    };
    var UKRAINIAN_MAP = {
        '?': 'Ye', '?': 'I', '?': 'Yi', '?': 'G', '?': 'ye', '?': 'i',
        '?': 'yi', '?': 'g'
    };
    var CZECH_MAP = {
        'c': 'c', 'd': 'd', 'e': 'e', 'n': 'n', 'r': 'r', 'š': 's', 't': 't',
        'u': 'u', 'ž': 'z', 'C': 'C', 'D': 'D', 'E': 'E', 'N': 'N', 'R': 'R',
        'Š': 'S', 'T': 'T', 'U': 'U', 'Ž': 'Z'
    };
    var POLISH_MAP = {
        'a': 'a', 'c': 'c', 'e': 'e', 'l': 'l', 'n': 'n', 'ó': 'o', 's': 's',
        'z': 'z', 'z': 'z',
        'A': 'A', 'C': 'C', 'E': 'E', 'L': 'L', 'N': 'N', 'Ó': 'O', 'S': 'S',
        'Z': 'Z', 'Z': 'Z'
    };
    var LATVIAN_MAP = {
        'a': 'a', 'c': 'c', 'e': 'e', 'g': 'g', 'i': 'i', 'k': 'k', 'l': 'l',
        'n': 'n', 'š': 's', 'u': 'u', 'ž': 'z',
        'A': 'A', 'C': 'C', 'E': 'E', 'G': 'G', 'I': 'I', 'K': 'K', 'L': 'L',
        'N': 'N', 'Š': 'S', 'U': 'U', 'Ž': 'Z'
    };
    var ARABIC_MAP = {
        '?': 'a', '?': 'b', '?': 't', '?': 'th', '?': 'g', '?': 'h', '?': 'kh', '?': 'd',
        '?': 'th', '?': 'r', '?': 'z', '?': 's', '?': 'sh', '?': 's', '?': 'd', '?': 't',
        '?': 'th', '?': 'aa', '?': 'gh', '?': 'f', '?': 'k', '?': 'k', '?': 'l', '?': 'm',
        '?': 'n', '?': 'h', '?': 'o', '?': 'y'
    };
    var LITHUANIAN_MAP = {
        'a': 'a', 'c': 'c', 'e': 'e', 'e': 'e', 'i': 'i', 'š': 's', 'u': 'u',
        'u': 'u', 'ž': 'z',
        'A': 'A', 'C': 'C', 'E': 'E', 'E': 'E', 'I': 'I', 'Š': 'S', 'U': 'U',
        'U': 'U', 'Ž': 'Z'
    };
    var SERBIAN_MAP = {
        '?': 'dj', '?': 'j', '?': 'lj', '?': 'nj', '?': 'c', '?': 'dz',
        'd': 'dj', '?': 'Dj', '?': 'j', '?': 'Lj', '?': 'Nj', '?': 'C',
        '?': 'Dz', 'Ð': 'Dj'
    };
    var AZERBAIJANI_MAP = {
        'ç': 'c', '?': 'e', 'g': 'g', 'i': 'i', 'ö': 'o', 's': 's', 'ü': 'u',
        'Ç': 'C', '?': 'E', 'G': 'G', 'I': 'I', 'Ö': 'O', 'S': 'S', 'Ü': 'U'
    };

    var ALL_DOWNCODE_MAPS = [
        LATIN_MAP,
        LATIN_SYMBOLS_MAP,
        GREEK_MAP,
        TURKISH_MAP,
        ROMANIAN_MAP,
        RUSSIAN_MAP,
        UKRAINIAN_MAP,
        CZECH_MAP,
        POLISH_MAP,
        LATVIAN_MAP,
        ARABIC_MAP,
        LITHUANIAN_MAP,
        SERBIAN_MAP,
        AZERBAIJANI_MAP
    ];

    var Downcoder = {
        'Initialize': function() {
            if (Downcoder.map) {  // already made
                return;
            }
            Downcoder.map = {};
            Downcoder.chars = [];
            for (var i = 0; i < ALL_DOWNCODE_MAPS.length; i++) {
                var lookup = ALL_DOWNCODE_MAPS[i];
                for (var c in lookup) {
                    if (lookup.hasOwnProperty(c)) {
                        Downcoder.map[c] = lookup[c];
                    }
                }
            }
            for (var k in Downcoder.map) {
                if (Downcoder.map.hasOwnProperty(k)) {
                    Downcoder.chars.push(k);
                }
            }
            // Downcoder.regex = new RegExp(Downcoder.chars.join('|'), 'g');
            // CHRISTOPHE BRISBOIS -> changed to:
            Downcoder.regex = new RegExp("[" + Downcoder.chars.join(']|[^' + "]+"), 'g');
        }
    };

    function downcode(slug) {
        Downcoder.Initialize();
        return slug.replace(Downcoder.regex, function(m) {
            return Downcoder.map[m];
        });
    }


    function URLify(s, num_chars, allowUnicode) {
        // changes, e.g., "Petty theft" to "petty-theft"
        // remove all these words from the string before urlifying
        if (!allowUnicode) {
            s = downcode(s);
        }
        var removelist = [
            "a", "an", "as", "at", "before", "but", "by", "for", "from", "is",
            "in", "into", "like", "of", "off", "on", "onto", "per", "since",
            "than", "the", "this", "that", "to", "up", "via", "with"
        ];
        var r = new RegExp('\\b(' + removelist.join('|') + ')\\b', 'gi');
        s = s.replace(r, '');
        // if downcode doesn't hit, the char will be stripped here
        if (allowUnicode) {
            // Keep Unicode letters including both lowercase and uppercase
            // characters, whitespace, and dash; remove other characters.
            s = XRegExp.replace(s, XRegExp('[^-_\\p{L}\\p{N}\\s]', 'g'), '');
        } else {
            s = s.replace(/[^-\w\s]/g, '');  // remove unneeded chars
        }
        s = s.replace(/^\s+|\s+$/g, '');   // trim leading/trailing spaces
        s = s.replace(/[-\s]+/g, '-');     // convert spaces to hyphens
        s = s.toLowerCase();               // convert to lowercase
        return s.substring(0, num_chars);  // trim to first num_chars chars
    }
    window.URLify = URLify;
})();
