(function($){
	"use strict"
	
	$.fn.snipper = function(options) {
		var opts = $.extend({}, $.fn.snipper.defaults, options),
			trimText = function($el, height, ellipsis) {
				// Make sure HTML entities only count as one character
				var ellipsisNumChars = ellipsis.replace(/&[^;]+?;/g, '.').length;

				while ($el.outerHeight() > height) {
					if ($el.text().length <= ellipsisNumChars) {
						break;
					}

					$el.html(function(i, text) {
						if (/\s/.test(text)) {
							return text.replace(/\s*(\S)*$/, ellipsis);
						}
						
						// If there is just one really long string without spaces
						// start stripping the last character and concatinating the ellipsis
						return text.replace(new RegEx('.{' + (ellipsisNumChars + 1) + '}$'), ellipsis);
					});
				}
			};

		this.each(function(){
			var $el = $(this),
				fullText = opts.fullText || $el.data('snipper:fullText'),
				height = opts.height,
				ellipsis = opts.ellipsis || '';

			// If height is a function get its return value
			if (typeof(height) === 'function') {
				height = height.apply(this);
			}

			if (!height) {
				return;
			}

			height = parseInt(height, 10);

			if (isNaN(height)) {
				return;
			}

			if (fullText) {
				if (typeof(fullText) === 'function') {
					fullText = fullText.apply(this);
				}

				$el.html(fullText);
			} else {
				$el.data('snipper:fullText', $el.html());
			}

			trimText($el, height, ellipsis);
		});

		return this;
	};
	
	$.fn.snipper.defaults = {
		ellipsis: '&hellip;'
	};
}(jQuery))