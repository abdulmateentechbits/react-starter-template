export const buildQuery = (obj) => {
	const url = Object.entries(obj)
		.map((pair) => pair.map(encodeURIComponent).join('='))
		.join('&')
	if (url.length) return `?${url}`

	return ''
}