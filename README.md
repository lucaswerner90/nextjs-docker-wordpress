# NextJS + TypeScript + WordPress

[![Next.js](https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png)](https://nextjs.org)
## Table of contents
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [URLs](#urls)
- [Configuration](#configuration)
	- [NextJS Plugins](#nextjs-plugins)
		- [Google Analytics](#google-analytics-integration)
		- [Hotjar](#hotjar-integration)
- [Running the tests](#running-the-tests)
	- [Frontend testing](#frontend-tests)
- [Deployment](#deployment)
- [Built with](#build-with)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

Well-known and reliable technologies such as:
* **WordPress**
* **MySQL** 
* **NextJS**
* **TypeScript**
* **Redux**

All together combined in a simple and easy-to-use **template** that will help you to start with your own projects in no time! :rocket:

### Prerequisites

In order to execute this project, you need to install these tools in your computer:
* [Docker Compose]([https://docs.docker.com/install/](https://docs.docker.com/install/))
* [Node JS](https://nodejs.org/)
* [NPM](https://nodejs.org/) or [Yarn](https://yarnpkg.com/lang/en/)

### Installation

This project is mainly composed by two different sections: backend and frontend.

1. Run the `docker-compose.yml` file by using:

```sh
docker-compose up
```
This will bring you a full operating system that contains:
* **WordPress** instance _(with the frontend side disabled)_
*  **MySQL** database 
* **phpMyAdmin** service

**NOTE:** _During the first time, it's possible that you can't access WordPress inmediately as the SQL database needs to be created and you can see `MySQL Connection Error: (2002) Connection refused` in your terminal, but just wait for the starting script to finished and you shouldn't see it anymore._

2. Build the client and run the **NextJS server**

```
cd frontend
yarn run dev
```

3. Go to `http://localhost:8080/wp-admin` and setup your WordPress

	- Input your language, user and email.
	- Go to **Settings > Permalinks** and select **Post name** , otherwise the REST API doesn't work.
	- Go to **Plugins**, select all the plugins and click select **Activate** action.

![WordPress installation](https://media.giphy.com/media/H8L5qihR6yODQ6B4au/giphy.gif)

### URLs

Once your configuration is up and running you can access to the different services:
* **WordPress (WP Admin)** - `http://localhost:8000/wp-admin`
* **phpMyAdmin** - `http://localhost:8081`
* **NextJS** - `http://localhost:3000` 

## Configuration

### NextJS Plugins
#### Google Analytics Integration
In order to be able to use Google Analytics in your webpage, you can do it by adding your GA code to `frontend/next.config.js`:

```javascript
// Change the GA_KEY value
// ...
module.exports = withTypescript({
	env: {
		GA_KEY:  "UA-xxxxxxxxx-1",
	}
});
```

#### Hotjar Integration
If you want to use [Hotjar](https://www.hotjar.com/) in your application, you can do it including the Hotjar `SITE_ID` into the `HOTJAR_KEY` variable, inside `frontend/next.config.js`:
```javascript
// Change the HOTJAR_KEY value
// ...
module.exports = withTypescript({
	env: {
		HOTJAR_KEY:  "123131131", 
	}
});
```


## Running the tests

### Frontend tests

This project uses [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to provide a whole **ready-to-use frontend testing** setup.

All the test files can be found at `frontend/__tests__` folder and they should be named `*.spec.tsx`. 

To run them, use:
```sh
yarn test
```
or if you want to use the watch mode, so you can run the tests after each code modification, use:
```sh
yarn test:watch
```

#### Example

Here is an example that can be found at `frontend/__tests__/pages/index.spec.tsx`:
```javascript
import  React  from  'react';
import { shallow } from  'enzyme';
import { Index } from  '../../pages/index';
import  Container  from  '@material-ui/core/Container';
import  Typography  from  '@material-ui/core/Typography';
import  Layout  from  '../../src/components/Layout';

describe('Render index page correctly', () => {
	let  _component;
	beforeEach(() => {
		_component  =  shallow(<Index  />);
	});
	afterEach(() => {
	});

	it('should render an index page with the correct layout components', () => {
		expect(_component.find(Layout).length).toBe(1);
		expect(_component.find(Container).length).toBe(1);
		expect(_component.find(Typography).length).toBe(2);
	});

});
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [NextJS](https://nextjs.org) - _used by Netflix, Uber, InVision, Binance, GitHub, Docker or Auth0 among the companies that use this technology._
* [WordPress](https://wordpress.org/) - _Most famous CMS, actually around 25% of the whole web pages use WordPress to provide content._

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Lucas Werner** - *Initial author* - [LinkedIn](https://www.linkedin.com/in/lucas-werner/) - [GitHub](https://github.com/lucaswerner90/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

The main idea of this project is to be able to provide a simple boilerplate setup for new modern projects. The purpose is to provide freelancers a new way to work with WordPress, by using it just as a CMS, so they can focus on develop the application by themselves. 