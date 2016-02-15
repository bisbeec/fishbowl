		$(function() {
			$(".hamburger").click(function() {
				$(".mobileMenu").toggleClass("show");
				$(".barOne").toggleClass("barOneEffect");
				$(".barTwo").toggleClass("barTwoEffect");
				$(".barThree").toggleClass("barThreeEffect");
			});
		});

		$(function() {
			$(".arrow-x").click(function() {
				$(".chatBox").toggleClass("show");
				$(".showChat").toggleClass("hideArrow");
				$(".hideChat").toggleClass("show");
			});
		});

		$(function() {
			$(".compose").click(function() {
				$(".newMessage").addClass("show");
				$("#overlay").addClass("show");
			});
		});

		$(function() {
			$(".rightBarEnvelope").click(function() {
				$(".newMessage").addClass("show");
				$("#overlay").addClass("show");
			});
		});

		$(function() {
			$(".closeMsgBox").click(function() {
				$(".newMessage").removeClass("show");
				$("#overlay").removeClass("show");
			});
		});

		$(function() {
			$(".shareBtn").click(function() {
				$(".shareSomething").addClass("show");
				$("#overlay").addClass("show");
			});
		});
		$(function() {
			$(".closeMsgBox").click(function() {
				$(".shareSomething").removeClass("show");
				$("#overlay").removeClass("show");
			});
		});

		$(function() {
			$(".minus-one").click(function() {
				$(".showcaseScroll").toggleClass("scrollBlockHide");
				$(".minus-one").toggleClass("minusHide");
			});
			$(".minus-two").click(function() {
				$(".eventsScroll").toggleClass("scrollBlockHide");
				$(".minus-two").toggleClass("minusHide");
			});
		});