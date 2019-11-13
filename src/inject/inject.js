const KEY = '';

chrome.extension.sendMessage({}, function () {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === 'complete') {
			clearInterval(readyStateCheckInterval);
			document.onclick = () => {
				setTimeout(() => {
					const container = document.querySelector('div.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2)');
					if (!document.getElementById('clever') && container) {
						const button = document.createElement('div');
						button.innerText = 'Clever';
						button.id = 'clever';
						container.appendChild(button);
						button.onclick = () => {
							button.style.opacity = '0.5';
							button.style.cursor = 'default';
							const tweet = document.querySelector('div.r-1iusvr4 > div.css-901oao > span').innerText;
							fetch(`https://www.cleverbot.com/getreply?key=${KEY}&input=${tweet}`)
								.then((resp) => resp.json())
								.then(function (data) {
									const { clever_output } = data;
									navigator.clipboard.writeText(clever_output);
									button.innerText = 'Copied';
								});
						}
					}
				}, 300)
			}
		}
	}, 10);
});