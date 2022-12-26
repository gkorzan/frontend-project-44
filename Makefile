.PHONY: install brain-games brain-even publish lint link
install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .