const toCamelCase: (string: string) => string = (string) => {
	return string
		.split('-')
		.map((x, i) => {
			if (i > 0) {
				return x[0].toUpperCase() + x.slice(1)
			}
			return x
		})
		.join('')
}

export default toCamelCase
