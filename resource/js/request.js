export default {
	
	serverAddress: "http://127.0.0.1:8080/",
	
	request(url,method,data,headers) {
		url = String(url);
		if (url.indexOf('://') == -1) {
			if (url.startsWith('/')) {
				url = this.serverAddress + String(url).substring(1, String(url).length);				
			} else {
				url = this.serverAddress + url;				
			}			
		} 
		return new Promise((resolve, reject) => {
			uni.request({
			    url: url, 
				method: method,
			    header: headers,
			    data: data,				
			    success: (res) => {
			        resolve(res);
			    },
				fail: (err) => {
					reject(err);
				}
			});
		});		
	},
	
	async get(url,data,headers) {
		return this.request(url, 'GET',data,headers);
	},
	
	async post(url,data,headers) {
		return this.request(url, 'POST',data,headers);		
	}
}

