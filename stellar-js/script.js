const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links-container");
if (document.querySelector(".hamburger")) {
	hamburger.addEventListener("click", function () {
		this.classList.toggle("active");
		navMenu.classList.toggle("slideIn");
	});
}

const moreIcon = document.querySelectorAll(".more-icon-span");
const dropDown = document.querySelectorAll(".drop-down");

if (document.querySelector(".more-icon-span")) {
	moreIcon.forEach((icon, index) => {
		icon.addEventListener("click", function () {
			dropDown[index].classList.toggle("show-drop-down");
			revealDropFunc(".more-icon", dropDown[index], "show-drop-down");
		});
	});
}

function revealDropFunc(highlightEl, dropEl, selectorStr) {
	document.addEventListener("click", function (event) {
		let parentEl = document.querySelector(highlightEl);
		if (event.target.closest(highlightEl) == null) {
			dropEl.classList.remove(selectorStr);
		}
	});
}

const mobileSearchIcon = document.querySelector(".mobile-search-icon");
const searchBar = document.querySelector(".search-bar");
if (document.querySelector(".search-bar")) {
	mobileSearchIcon.addEventListener("click", function () {
		searchBar.classList.toggle("active");
	});
}

if (document.querySelector(".category-navigation-div .btn.right")) {
	const catNavBtnRight = document.querySelector(
		".category-navigation-div .btn.right"
	);
	const catNavBtnLeft = document.querySelector(
		".category-navigation-div .btn.left"
	);

	const categoryItemsContainer = document.querySelector(
		".category-items-container"
	);
	const categoryItem = document.querySelectorAll(".category-item-div");
	catNavBtnRight.addEventListener("click", function () {
		let nextPos =
			categoryItemsContainer.scrollLeft + categoryItem[0].clientWidth;
		categoryItemsContainer.scrollLeft = nextPos;
	});

	catNavBtnLeft.addEventListener("click", function () {
		let nextPos =
			categoryItemsContainer.scrollLeft - categoryItem[0].clientWidth;
		categoryItemsContainer.scrollLeft = nextPos;
	});
}

const codeInputs = document.querySelectorAll(".form-code-el-input");

if (document.querySelector(".form-code-el-input")) {
	codeInputs.forEach((input, index) => {
		input.addEventListener("input", () => {
			if (index < codeInputs.length - 1 && input.value !== "") {
				codeInputs[index + 1].focus();
			}
		});
	});

	codeInputs.forEach((input, index) => {
		input.addEventListener("keydown", (e) => {
			if (e.key === "Backspace" && input.value == "") {
				if (index > 0) {
					codeInputs[index - 1].focus();
				}
			}
		});
	});
}

if (document.querySelector(".acct-container .submit-btn")) {
	const acctSubmitBtn = document.querySelector(".acct-container .submit-btn");
	acctSubmitBtn.addEventListener("click", function () {
		this.querySelector(".text").classList.add("hide-opac");
		this.querySelector(".loader").classList.add("reveal-opac");
		setTimeout(() => {
			this.querySelector(".text").classList.remove("hide-opac");
			this.querySelector(".loader").classList.remove("reveal-opac");
		}, 10000);
	});
}
