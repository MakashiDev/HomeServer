const h1Time = document.querySelector("#time");

const renderTime = () => {
	const now = new Date();
	let time = now.toLocaleTimeString();
	//convert it 24 hour format
	time = now.toLocaleTimeString("en-US", { hour12: false });
	h1Time.textContent = time;
};

setInterval(renderTime, 1000);
