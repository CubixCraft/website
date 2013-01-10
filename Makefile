
update: dependencies git

git:
	git pull --rebase

dependencies:
	npm update

clean:
	@rm -rf node_modules

.PHONY: clean