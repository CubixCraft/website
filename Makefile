
update: dependencies git

git:
	git reset --hard origin/master

dependencies:
	npm update

clean:
	@rm -rf node_modules

.PHONY: clean