# lineus-mongoose-wrapper
simple Mongoose wrapper for quick connections

## Installation

```
npm install lineus-mongoose-wrapper
```

## Usage

```
const mongoose = require('lineus-mongoose-wrapper')(serverAddress, portNumber);
//Optionally, one can define a default collection to connect to by specifying a collection
const mongoose = require('lineus-mongoose-wrapper')(serverAddress, portNumber, collection);

```

## Details
This quick and simple mongoose connection wrapper takes care of connection related boilerplate code and replaces it with a single require statement.

*Cheers*

**Big Thanks to [lineus](https://github.com/lineus) for the original code that was modified to be modular**
