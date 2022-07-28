
const Toast = Swal.mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
})

const showSuccess = (msg) => {
	Swal.fire({
		icon: 'success',
		title: msg,
		timer: 2000,
		showConfirmButton: false
	})
};

const showError = (msg, showConfirmBtn = false) => {
	Swal.fire({
		icon: 'error',
		title: msg,
		timer: (showConfirmBtn) ? 0 : 2000,
		showConfirmButton: showConfirmBtn
	})
};

const showComingSoon = () => {
	Swal.fire({
		icon: 'info',
		title: 'Coming Soon...',
		timer: 1500,
		showConfirmButton: false,
		timerProgressBar: true
	})
};

const showLoading = () => {
	Swal.fire({
		title: 'Loading...',
		showConfirmButton: false,
		allowOutsideClick: false,
		didOpen: () => {
			Swal.showLoading()
		},
	})
}

const noScroll = () => {
	$('body').css({
		overflow: 'hidden'
	});
}

const scroll = () => {
	$('body').css({
		overflow: 'auto'
	});
}

$('#mobile_menu_button').click(function() {
	$(this).addClass("hide")
	$('#navbar_mobile').show()
	setTimeout(() => {
		$('#mobile_menu_button_close').addClass('show')
		$('.navbar_mobile_content').addClass('show')
	}, 100)
	noScroll()
})

$('#mobile_menu_button_close').click(function() {
	$(this).removeClass('show')
	$('.navbar_mobile_content').removeClass('show')
	setTimeout(() => {
		$('#navbar_mobile').hide()
		$('#mobile_menu_button').removeClass('hide')
	}, 500)
	scroll()
})

$('.navbar_mobile_content > a.navItem').click(function() {
	$('#mobile_menu_button_close').click()
})
