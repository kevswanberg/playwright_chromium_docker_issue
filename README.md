# Playwright project showing a bug in Chromium* 

Chromium media query for pointer will change after you visit some websites.

Slight overkill on the amount of sites that this happens/doesnt happen on but it highlights that not most sites do it.


    docker run -it --rm  -v ./package.json:/home/somewhere/package.json -v ./tests:/home/somewhere/tests \
    -v ./playwright.config.ts:/home/somewhere/playwright.config.ts mcr.microsoft.com/playwright:v1.49.0-noble \
    /bin/bash -c "cd /home/somewhere/ && npm i && npx playwright test"

