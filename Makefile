all: build_node_app

build_node_app:
	@echo "Building NodeJS Application"
	
	cd activitywatch-report && \
	npm install && \
	npm run build && \
	cd ../ && \
	cp -v activitywatch-report/dist/ActivityWatch-Report.AppImage opt/activitywatch/

clean:
	rm -fv opt/activitywatch/*.AppImage && \
	rm -rf activitywatch-report/dist