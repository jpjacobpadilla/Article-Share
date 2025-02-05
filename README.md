<h1 align="center">Any Easy Way to Share Articles on Stories</h1>

<p align="center">
    <img src="example.png" width="800px">
</p>

<p align="center">A tool that creates beautiful stories to share articles/websites with!</p>

## Setup
Download the repo:
```
$ git clone https://github.com/jpjacobpadilla/Article-Share.git
```

Go into the repository:
```
$ cd Article-Share
```

Create a virtual environment to store the project dependencies
```
$ python -m venv venv
```

Activate the environment
```
$ source venv/bin/activate
```

Install the dependencies
```
$ pip install -r requirements.txt
```

Generate an image!

This project accepts a website url and then parses the page to get the `og:image` meta tag.
It will then generate the image and save it image in the `images` directory.
```
$ python generate.py [url here without the brackets]
```

Example:
```
$ python generate.py https://jacobpadilla.com/articles/Python-Flask-Login-System
```

## Contributing
Contributions are welcome! If you have a suggestion or an issue, please use the issue tracker to let me know.
