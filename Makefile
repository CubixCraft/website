
update: git dependencies

git:
	git pull --rebase

dependencies:
	npm update
	find lib/* -maxdepth 0 -type d -exec bash -c "cd '{}' && npm update" \;

clean:
	@rm -rf node_modules
	@rm -rf lib/*/node_modules

.PHONY: clean