run:
	docker run -v $$PWD:/app \
		-e AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY -e BUCKET \
		-w /app -m 300m --memory-swap 300m --cpus=2 \
		node:12-alpine sh -c 'npm install && node index.js'
.PHONY: run
