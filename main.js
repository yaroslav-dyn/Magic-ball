
$(document).ready(function() {
 			/*Функция рандомного ответа*/
function answer(textAnswer){
	var randAnsw =  (Math.random() * 10).toFixed(1);
	/*Положительные ответы*/
 if (randAnsw >= 0 && randAnsw <= 0.4){
 	textAnswer = ("It is certain <br> (Бесспорно)");
 }
	else if (randAnsw >= 0.5 && randAnsw <= 0.9) {
	 	textAnswer = ( "It is decidedly so <br> (Предрешено)");
	}
	else if (randAnsw >= 1 && randAnsw <= 1.4) {
	 	textAnswer = ("Without a doubt <br> (Никаких сомнений)");
	}
	else if (randAnsw >= 1.5 && randAnsw <= 1.9) {
	 textAnswer = ("Yes — definitely <br> (Определённо да)");
	}
	else if (randAnsw >= 2 && randAnsw <= 2.4) {
	 textAnswer = ("You may rely on it <br> (Можешь быть уверен в этом)");
	}
	/*Нерешительно Положительные ответы*/
	else if (randAnsw >= 2.5 && randAnsw <= 2.9) {
	 textAnswer = ("As I see it, yes <br> (Мне кажется — «да»)");
	}	
	else if (randAnsw >= 3 && randAnsw <= 3.4) {
	 textAnswer = ("Most likely <br> (Вероятнее всего)");
	}
	else if (randAnsw >= 3.5 && randAnsw <= 3.9) {
	 textAnswer = ("Outlook good (Хорошие перспективы)");
	}
	else if (randAnsw >= 4 && randAnsw <= 4.4) {
	 textAnswer = ("Signs point to yes <br>(Знаки говорят — «да»)");
	}
	else if (randAnsw >= 4.5 && randAnsw <= 4.9) {
	 textAnswer = ("Yes (Да)");
	}
	/*Нейтральные*/
	else if (randAnsw >= 5.0 && randAnsw <= 5.4) {
 	textAnswer = (" Reply hazy, try again <br>(Пока не ясно, попробуй снова)");
 	}
	else if (randAnsw >= 5.5 && randAnsw <= 5.9) {
	textAnswer = ("Ask again later<br>(Спроси позже)");
	}
	else if (randAnsw >= 6.0 && randAnsw <= 6.4) {
	textAnswer = ("Better not tell you now <br> (Лучше не рассказывать)");
	}
	else if (randAnsw >= 6.5 && randAnsw <= 6.9) {
	textAnswer = ("Cannot predict now <br> (Сейчас нельзя предсказать)");
	}
	else if (randAnsw >= 7 && randAnsw <= 7.4) {
	textAnswer = ("Cannot predict now <br>(oncentrate and ask again <br>(Сконцентрируйся и спроси опять)");
	}
	/*Отрицательные*/
	else if (randAnsw >= 7.5 && randAnsw <= 7.9) {
	textAnswer = ("Don’t count on it <br> (Даже не думай)");
	}
	else if (randAnsw >= 8 && randAnsw <= 8,4) {
	textAnswer = ("My reply is no <br>(Мой ответ — «нет»)");
	}
		else if (randAnsw >= 8.5 && randAnsw <= 8.9) {
	textAnswer = ("My sources say no <br>(По моим данным — «нет»)");
	}

	else if (randAnsw >= 9 && randAnsw <= 9.4) {
	textAnswer = ("Outlook not so good <br> (Перспективы не очень хорошие)");
	}
	else if (randAnsw >= 9.4 && randAnsw <= 9.9) {
	textAnswer = ("Very doubtful <br> (Весьма сомнительно)");
	}
	else{
		("Try again <br> (Попрорбуй снова)");
	};
	return textAnswer;
	/*var enterAnswer =  document.getElementById('ball_wind');
	enterAnswer.innerHTML = textAnswer;*/
}//End function 
	 /*Вызов вункции по клику и эффекты*/
	$('#ball_bg').bind("click",function(){	
		$('#ball_bg')
			.animate({top: "+=8"}, 40, function(){
				$('#ball_wind_inner_text').html("");
			})
			.animate({top: "-=12"}, 50)
			.animate({top: "+=12"}, 40)
			.animate({top: "-=8"}, 50, function(){
				setTimeout(function(){
					$('#ball_wind_inner_text').html(answer());
				}, 190);	 	
			});
	});

}); //End ready


