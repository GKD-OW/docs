#!/bin/bash

main() {
	# Only master
	if [[ "$TRAVIS_BRANCH" != "master" ]];then
		echo -e "Not master, skip deploy www\n"
		return 0
	fi

	github_repo="sylingd/ow-workshop"
	github_branch="gh-pages"
	
	cd $TRAVIS_BUILD_DIR
	mkdir -p build/www

	# Build
	cd $TRAVIS_BUILD_DIR
	yarn
	yarn build
	mv $TRAVIS_BUILD_DIR/.vuepress/dist/* $TRAVIS_BUILD_DIR/build/www

	# Copy all files
	cp $TRAVIS_BUILD_DIR/ci/www/* $TRAVIS_BUILD_DIR/build/www/

	# Upload
	cd $TRAVIS_BUILD_DIR/build/www/
	git init
	git config user.name "Deployment Bot"
	git config user.email "deploy@travis-ci.org"
	git add .
	git commit -m "Automatic deployment"
	git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${github_repo}.git" master:$github_branch
}

main