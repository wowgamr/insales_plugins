function age_confirmed() {
	console.log('Confirmed');

	cookie.set({
		age_confirmed: true
	}, {
		expires: 1,
		path: '/'
	})

	console.log(cookie.get('age_confirmed'));

	$(".body-wrapper").removeClass("blur");
	$(".age-confirmation").hide();
	$(".age-blocked").hide();
}

function age_not_confirmed() {
	location.href = "https://yandex.ru"
}

if (cookie('age_confirmed') != "true") {
	$(".body-wrapper").addClass("blur");
	$(".age-blocked").show();
	$(".age-confirmation").show();

	$('#age_confirmed').on("click", function () { age_confirmed() });
	$('#age_not_confirmed').on("click", function () { age_not_confirmed() });
}