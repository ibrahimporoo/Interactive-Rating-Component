let ratingsItems = document.querySelectorAll(".ratings .circle");
let submitBtn = document.getElementById("submit-btn");
let thanksCard = document.querySelector(".thanks-card");
let submitCard = document.querySelector(".submit-card");
let userMark = document.getElementById("mark");
let fullMark = document.getElementById("fullMark");
let count = 0;

ratingsItems.forEach(item => {
	count++;
	item.addEventListener("click", function(e) {
		ratingsItems.forEach(el => {
			el.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});

submitBtn.addEventListener("click", function(e) {
	ratingsItems.forEach(item => {
		if(item.classList.contains("active")) {
			thanksCard.style.display = "block";
			submitCard.style.display = "none";
			userMark.textContent = item.textContent;
		}
		fullMark.textContent = count;
	})
});
