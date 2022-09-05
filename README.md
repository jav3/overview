# Github pages link

Visit [https://jav3.github.io/overview/](https://jav3.github.io/overview/)


# Pre-requisites
1. If you do not have `npm` installed, install `Node.js` and `npm` from [https://nodejs.org/en/](https://nodejs.org/en/)
2. If you have `npm` installed, ensure it is up-to-date, e.g. `npm install -g npm@latest`

# Steps to re-create this project from scratch
1. Create a `svelte` app (powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte))

    ```bash
        # create a new project in my-app
        npm create svelte@latest my-app

        cd my-app

        npm install

        npm run dev -- --open
    ```

2. Install the adapter for SvelteKit to perform static rendering

    ```bash
        npm i -D @sveltejs/adapter-static
    ```

3. Adjust your `svelte.config.js` as per [svelte.config.js](svelte.config.js). Notes:
   - The adapter import now reflects the static adapter
   - Pages and assets under the `adapter` section reference a `docs` folder. This is the folder in your repo where your website build will be stored. 
   - Change the `base` parameter under `paths` to `/<repo_name>`. Interpret as follows:
      - On your local (i.e. `dev = true`), the base path will be blank. 
      - On Github (i.e. `dev = false`), your website will be rendered with a base url of `https://<username>.github.io/<repo_name>`

4. For any of the `+page.svelte` files that reference a relative path, you will need to add the base path to it, e.g.

    ```js
        <a href="todos">TODOs</a>
    ```

   becomes

    ```js
        <script>
            import { base } from '$app/paths';
        </script>

        <a href="{base}/todos">TODOs</a>
    ```

   If you are not sure whether all have been accounted for, don't worry as when you run the "build", it should fail with a reference to the file/code which needs to be changed.

4. Go to your repository -> settings -> Pages to enable GitHub Pages. Select the branch to render from and set the folder to be `/docs`

5. In your terminal, do the following to validate that the code runs locally first:

    ```bash
        export NODE_ENV=development
        npm run dev
    ```

    Visit the provided port to see the rendered site

6. Build for production

    ```bash
        export NODE_ENV=prod
        npm run build
    ```

    If you see any errors, address them and re-build (e.g. as noted above, you can see `404` errors if you didn't add the base path to all relative urls)

7. Upload to your GitHub repo

    ```bash
        git add docs/* # Any anything else you'd like to commit
        git commit -m"Your git commit message"
        git push
    ```

8. Navigate to your GitHub pages url

# Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

# Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
