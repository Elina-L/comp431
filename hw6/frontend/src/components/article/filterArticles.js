
export const actions = { 
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const filterArticles = (articles, filter) => {
	switch(filter) {
		case actions.SHOW_COMPLETED:
			return articles.filter(article => article.done)
		case actions.SHOW_ACTIVE:
			return articles.filter(articles => !articles.done)
		case actions.SHOW_ALL:
		default:
			return articles
	}
}
