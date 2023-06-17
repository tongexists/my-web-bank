import request from '../request.js';

export function getTopNewsList() {
	return request.get('/commonText/common-text/'+1+'/'+1+'/'+3);
}

export function getOrganizationTalkNodes() {
	return request.get('/page/getOrganizationTalkNodes')
}