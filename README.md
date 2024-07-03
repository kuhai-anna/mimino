# Mimino

## Project Description

A multi-page website for the "Mimino" company that helps users to plan and book
visits to the restaurant-hotel complex, learn about services and amenities, and
interact with the administration through online booking forms.

![Design visualization](./assets/project.png)

---

## Technical Tasks Completed

- The project was implemented using pure HTML, SASS, and JavaScript.
- Adaptive layout implemented except for mobile devices. Breakpoints:
  - mobile: the layout is flexible, becomes adaptive at 414px;
  - tablet: 1024px;
  - desktop: 1280px.
- Ensured semantic correctness according to HTML5 standards.
- Connected fonts using font-face.
- Supported image display for retina screens.
- Optimized image loading.
- Added page favicon display.
- Checked layout for validity
  ([Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkuhai-anna.github.io%2Fmimino%2Fhotel.html)).

---

## Practical Tasks Completed

#### Main page

##### Header

The Header contains the logo, navigation, and a list of social media links (in
mobile and desktop versions).

- The company's logo (name) was implemented as a link that returns the user to
  the main page.
- Navigation was implemented as a list of items, each containing a link to the
  corresponding page and contact phone numbers for feedback.
- Social media links open external resources in a separate tab.

##### Hero

- Contains buttons that open modal windows for booking a table in the restaurant
  and a room in the hotel.
- The establishment's address was implemented as a link to an external map
  resource.
- The tablet and desktop versions of this section contain links from the social
  media list.

##### About our restaurant and About our hotel

- Sections don't have visible headers, so hidden ones are added for crawlers.
- Sliders with content images was implemented using the third-party Slick slider
  library.

##### Details of our restaurant and Details of our hotel

- Sections have sliders with content images implemented using the third-party
  Slick slider library.
- Sections contain buttons that open modal windows for booking a table, room,
  and viewing room prices in the hotel.
- The "Details of our restaurant" section has a "View Menu" button implemented
  as a link that leads the user to the Restaurant Page.

##### Contacts

- The section does not have a visible header, so a hidden one is added for
  crawlers.
- Includes a list of contact phone numbers for feedback and the address with a
  Google map.

  ##### Footer

  The Footer contains the logo, navigation, and a list of social media links.

- The company's logo (name) was implemented as a link that returns the user to
  the main page.
- Navigation was implemented as a list of items, each containing a link to the
  corresponding page.
- Social media links open external resources in a separate tab.

#### Restaurant Page

##### Hero

- Contains a "Book" button that opens a modal window for table booking.
- The "View Menu" button was implemented as an anchor link that leads to the
  corresponding Menu section of this page.
- The establishment's address was implemented as a link to an external map
  resource.
- The tablet and desktop versions of this section contain links from the social
  media list.

##### About our kitchen

- The section does not have a visible header, so a hidden one is added for
  crawlers.
- A slider with content images was implemented using the third-party Slick
  slider library.

##### Menu

- The restaurant menu content was implemented as a table. The "Book a Table"
  button opens a modal window.

#### Hotel Page

##### Hero

- Contains buttons that open modal windows for booking a room and viewing
  prices.
- The establishment's address was implemented as a link to an external map
  resource.
- The tablet and desktop versions of this section contain links from the social
  media list.

##### Room Sections

- Sections have sliders with content images implemented using the third-party
  Slick slider library.
- Contains a "More Details" button implemented as a link that leads the user to
  the corresponding Room Page.
- The "View Prices" button opens a modal window.

#### Room Page

##### Hero

- The section has a slider with content images implemented using the third-party
  Slick slider library.
- Contains a "View Prices" button that opens a modal window.

##### Amenities

- Contains a button that opens a modal window for room booking.
- The "Return to Room View" button was implemented as a link that leads the user
  to the Hotel Page.

##### Modal windows

Implemented as forms with minimal validation.

---

# Parcel template

This project was created with Parcel. For familiarization and setting additional
features [refer to documentation](https://parceljs.org/).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Clone this repository.
3. Change the folder name from `parcel-project-template` to the name of your
   project.
4. Create a new empty GitHub repository.
5. Open the project in VSCode, launch the terminal and link the project to the
   GitHub repository
   [by instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Install the project's dependencies in the terminal with the `npm install`
   command.
7. Start development mode by running the `npm start` command.
8. Go to [http://localhost:1234](http://localhost:1234) in your browser. This
   page will automatically reload after saving changes to the project files.

## Files and folders

- All stylesheet parshas should be in the `src/sass` folder and imported into
  the page stylesheets. For example, for `index.html` the style file is named
  `index.scss`.
- Add images to the `src/images` folder. The assembler optimizes them, but only
  when deploying the production version of the project. All this happens in the
  cloud so as not to burden your computer, as it can take a long time on weak
  machines.

## Deploy

To set up a project deployment, you need to perform a few additional steps to
set up your repository. Go to the `Settings` tab and in the `Actions` subsection
select the `General` item.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll the page to the last section, in which make sure the options are selected
as in the following image and click `Save`. Without these settings, the build
will not have enough rights to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

The production version of the project will be automatically built and deployed
to GitHub Pages, in the `gh-pages` branch, every time the `main` branch is
updated. For example, after a direct push or an accepted pull request. To do
this, you need to edit the `homepage` field and the `build` script in the
`package.json` file, replacing `your_username` and `your_repo_name` with your
own, and submit the changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Next, you need to go to the settings of the GitHub repository (`Settings` >
`Pages`) and set the distribution of the production version of files from the
`/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the
icon, and in the drop-down window, follow the link `Details`.

![Deployment status](./assets/status.png)

### Live page

After some time, usually a couple of minutes, the live page can be viewed at the
address specified in the edited `homepage` property. For example, here is a link
to a live version for this repository
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

If a blank page opens, make sure there are no errors in the `Console` tab
related to incorrect paths to the CSS and JS files of the project (**404**).
Most likely you have the wrong value for the `homepage` property or the `build`
script in the `package.json` file.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) is launched from the `.github/workflows/deploy.yml`
   file.
2. All repository files are copied to the server, where the project is
   initialized and built before deployment.
3. If all steps are successful, the built production version of the project
   files is sent to the `gh-pages` branch. Otherwise, the script execution log
   will indicate what the problem is.
