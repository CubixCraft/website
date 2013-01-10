
update: dependencies git

git:
	git pull

dependencies:
	npm update

clean:
	@rm -rf node_modules

.PHONY: clean