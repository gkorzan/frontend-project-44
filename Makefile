.PHONY: install brain-games brain-even brain-calc publish lint link
install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .