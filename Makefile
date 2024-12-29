runFrontend rf:
	ng serve shell -o; ng serve mfe1 -o

sync:
	npx cap sync

buildLibrary bl:
	