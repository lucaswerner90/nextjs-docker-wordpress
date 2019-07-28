# NextJS + TypeScript + WordPress

[![Next.js](https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png)](https://nextjs.org)
## Table of contents
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [URLs](#urls)
- [Configuration](#configuration)
- [Running the tests](#tests)
	- [Frontend testing](#frontend-tests)
- [Deployment](#deployment)
- [Built with](#built-with)
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

1. Add your customs domains and subdomains to your hosts file

If you in OS X or Linux:

```sh
sudo vi /etc/hosts
```

And add the following lines (you can change the domain name):

```sh
127.0.0.1 <your_domain>.com
127.0.0.1 db.<your_domain>.com
127.0.0.1 api.<your_domain>.com
127.0.0.1 admin.<your_domain>.com
```

This will make all your subdomains accesible from your local machine.

2. Run the `install.js` script:

```sh
chmod +x install.js
```
```sh
./install.js
```


3. Setup your WordPress, by default it's installed in: `http://admin.<your_domain>.com:5000`

	- Input your language, user and email.
	- Go to **Settings > Permalinks** and select **Post name** , otherwise the REST API won't work.
	- Go to **Plugins**, select all the plugins and click select **Activate** action.

![WordPress installation](https://media.giphy.com/media/H8L5qihR6yODQ6B4au/giphy.gif)

### URLs

Once your configuration is up and running you can access to the different services:
* **WordPress (WP Admin)** 			- `http://admin.<your_domain>.com:5000/`
* **phpMyAdmin** 					- `http://db.<your_domain>.com:5000`
* **NextJS** 						- `http://<your_domain>.com:5000` 
* **API** 							- `http://api.<your_domain>.com:5000` 

## Configuration

[TODO]

## Tests

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

## Additional Help

* [NextJS Spectrum Chat](https://spectrum.chat/next-js/general?tab=posts)
## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [NextJS](https://nextjs.org) - _used by Netflix, Uber, InVision, Binance, GitHub, Docker or Auth0 among the companies that use this technology._
* [WordPress](https://wordpress.org/) - _Most famous CMS, actually around 60% of the whole web pages use WordPress to provide content._

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Lucas Werner** - *Initial author* - [LinkedIn](https://www.linkedin.com/in/lucas-werner/) - [GitHub](https://github.com/lucaswerner90/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

The main idea of this project is to be able to provide a simple boilerplate setup for new modern projects. The purpose is to provide freelancers a new way to work with WordPress, by using it just as a headless CMS, so they can focus on develop the application by themselves. 