node-demo
=========

Node demo with production scripts

# For development

First go inside node-demo folder and install your dependencies:

```sh
$ npm install
```

Then you can run:

```sh
$ node index
```

# For production

I recommend **forever** to run the server demonized:

```sh
$ sudo npm install -g forever
```

Later just clone node-demo:

```sh
$ git clone https://github.com/julianceballos/node-demo
```

Go inside project folder and install the dependencies:

```sh
$ npm install
```

Now just give execution permissions and run the **load.sh** script:

```sh
$ chmod +x server/load.sh
```

```sh
$ server/load.sh
```

Now just execute the process for your project:

```sh
$ service demo restart
```

Now just restart nginx

```sh
$ service nginx restart
```
