$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});








var bsNav = {
	init: function(){
		this.cacheDOM();
		this.stateLanding();
		this.dropdownToggle();
		this.handleToggles();
	},
	cacheDOM: function(){
		this.$navParent = $(".navbar");
		this.$navBarCollapseTarget = $(".navbar-collapse");
		this.$dropdownMenuParents = this.$navParent.find(".dropdown");
		this.$dropdownMenus = this.$dropdownMenuParents.find(".dropdown-menu");
		this.$menuItems = this.$navParent.find("li");
		this.$navBarToggleAnchor = this.$navParent.find("a.navbar-toggle");
		this.$navBarToggleButton = this.$navParent.find("button.navbar-toggle");
	},
	stateLanding: function(){
		this.$dropdownMenuParents.attr({
			"aria-haspopup": "true"
		});
		this.$dropdownMenus.attr({
			"aria-hidden": "true",
			"role": "menu"
		});
		this.$menuItems.attr({
			"role": "menuitem"
		});
		
	},
	dropdownToggle: function(){
		this.$dropdownMenuParents.on("shown.bs.dropdown", function(){
			$(this).find(".dropdown-menu").attr("aria-hidden","false");
		});
		this.$dropdownMenuParents.on("hidden.bs.dropdown", function(){
			$(this).find(".dropdown-menu").attr("aria-hidden","true");
		});
		
	},
	
	handleToggles: function(){
		this.$navBarToggleAnchor.attr({
			"aria-hidden" : "true",
			"tabindex": "-1"
		});
		
		this.$navBarToggleButton.attr({
			"aria-hidden" : "false"
		});
		
	}

};
bsNav.init();
var slide1 = $('.slide1'),
	slide2 = $('.slide2'),
	slide3 = $('.slide3'),
	slide4 = $('.slide4'),
	slide5 = $('.slide5'),
	btnslide1 = $('.btn-slide1'),
	btnslide2 = $('.btn-slide2'),
	btnslide3 = $('.btn-slide3'),
	btnslide4 = $('.btn-slide4'),
	btnslide5 = $('.btn-slide5'),
	myarray = [slide1, slide2, slide3, slide4,slide5]
$(btnslide1).click(function() {
  TweenMax.to(myarray, 1, {alpha:0})
  TweenMax.to(slide1, 1, {alpha:1})  
})
$(btnslide2).click(function() {
  TweenMax.to(myarray, 1, {alpha:0})
  TweenMax.to(slide2, 1, {alpha:1})  
})
$(btnslide3).click(function() {
  TweenMax.to(myarray, 1, {alpha:0})
  TweenMax.to(slide3, 1, {alpha:1})  
})
$(btnslide4).click(function() {
  TweenMax.to(myarray, 1, {alpha:0})
  TweenMax.to(slide4, 1, {alpha:1})
})
$(btnslide5).click(function() {
  TweenMax.to(myarray, 1, {alpha:0})
  TweenMax.to(slide5, 1, {alpha:1})
})


$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 60000);
})








