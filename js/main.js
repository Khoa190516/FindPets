/*price range*/

$('#sl2').slider();

var RGBChange = function () {
	$('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
};

/*scroll to top*/

$(document).ready(function () {
	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			scrollDistance: 300, // Distance from top/bottom before showing element (px)
			scrollFrom: 'top', // 'top' or 'bottom'
			scrollSpeed: 300, // Speed back to top (ms)
			easingType: 'linear', // Scroll to top easing (see http://easings.net/)
			animation: 'fade', // Fade, slide, none
			animationSpeed: 200, // Animation in speed (ms)
			scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
			//scrollTarget: false, // Set a custom target element for scrolling to the top
			scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
			scrollTitle: false, // Set a custom <a> title if required.
			scrollImg: false, // Set true to use image
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});

fetchPosts();

async function fetchPosts() {
	var response = await fetch('https://localhost:7217/api/Posts');
	var resJson = await response.json();

	var posts = resJson;
	showPosts(posts);
}

function showPosts(posts) {
	const featureItems = document.getElementById('posts-list');
	featureItems.innerHTML = '';

	posts.forEach((post) => {
		const { id, contact, description, created, postImages } = post;

		const postEle = document.createElement("div");
		postEle.classList.add("col-sm-4");

		postEle.innerHTML = `
			<div class="product-image-wrapper">
				<div class="single-products">
					<div class="productinfo text-center">
						<img src="${postImages[0].imageBase64}" alt="${description}" />
						<h2>${description}</h2>
						<p>${contact}</p>
						<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>View Details</a>
					</div>
					<div class="product-overlay">
						<div class="overlay-content">
							<h2>${description}</h2>
							<p>${contact}</p>
							<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>View Details</a>
						</div>
					</div>
				</div>
				<div class="choose">
					<ul class="nav nav-pills nav-justified">
						<li><a href="#"><i class="fa fa-plus-square"></i>Follow</a></li>
					</ul>
				</div>
			</div>
		`;
		featureItems.appendChild(postEle);
	});
}
