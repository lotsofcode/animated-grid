(function($){ 
$.fn.extend({ 
    smallLargePanel: function(options) {
        var options = $.extend({
            showCallback: null,
            hideCallback: null
        }, options);

		var parent = this,
			children = $('li', parent),
			count = children.length,
			start = (count / 2) + 1,
			large = null;

        return $('li', this).click(function(e) {
            e.preventDefault();
			obj = this;
			large = $('.large', parent);
			if (large.is(':animated')) return;
			if (large.length > 0) {
				large.fadeOut('slow', function() {
					large.remove();
					showLargePanel(obj);
				});	
			} else {
				showLargePanel(obj);
			}
        });

        function showLargePanel(obj) {
			startNode = $('li:nth-child('+start+')',parent);
			startNode.before(
				$('<li>').addClass('large').html(obj.innerHTML).hide()
				// "<li style='display:none;' class='large'>"+obj.innerHTML+"</li>"
			);
			$('.large', parent).fadeIn('slow');
		}
    }
});
})(jQuery);
	

// call plugin
$('ul').smallLargePanel({
	'showCallback' : function () {
		alert('Show')
	},
	'hideCallback' : function () {
		alert('Hide')
	}
});
