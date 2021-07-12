# Box React Starter
The Box React Starter project is an example repo that includes an Express backend with the [Box UI Elements](https://github.com/box/box-ui-elements) React components


## Helpful tools to get IDs needed in the prerequisites section.
1. [Box CLI](https://developer.box.com/guides/tooling/cli/)
2. [Box Postman Collection](https://developer.box.com/guides/tooling/postman/)

## Pre-Requisites

1. Clone this github repo.
2. Run `yarn install` to install dependencies
3. Create and authorize a JWT Application in the [Box Developer Console](https://account.box.com/developers/services) using the following [Setup Guide.](https://developer.box.com/en/guides/applications/custom-apps/jwt-setup/)
4. Copy the generated *_config.json Box application file to the [server directory](/server).
5. Update the following [server/Constants.js](/server/Constants.js) file variables
    * [RECENTS_USER_ID](https://github.com/kylefernandadams/box-react-starter/blob/main/server/Constants.js#L4)
    * [PREVIEW_FILE_ID](https://github.com/kylefernandadams/box-react-starter/blob/main/server/Constants.js#L7)
6. The [ContentExplorerMetadata.js](https://github.com/kylefernandadams/box-react-starter/blob/main/client/src/components/elements/ContentExplorerMetadata.js) example component requires a metadata templated to be created first. 
    * [Create Metadata Templates documentation](https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates)
    * Use the Box CLI or Postman collection to get the values for the following variables.
6. Update the following [client/src/Constants.js](/client/src/Constants.js) file variables
    * [ENTERPRISE_ID](https://github.com/kylefernandadams/box-react-starter/blob/main/client/src/Constants.js#L12)
    * [METADATA_TEMPLATE_KEY](https://github.com/kylefernandadams/box-react-starter/blob/main/client/src/Constants.js#L13)
    * [Corresponding metadata properties](https://github.com/kylefernandadams/box-react-starter/blob/main/client/src/Constants.js#L14)
    * [PREVIEW_FILE_ID](https://github.com/kylefernandadams/box-react-starter/blob/main/client/src/Constants.js#L8)
7. Run `yarn start` in both the server directory and client directory.


## Disclaimer
This project is a collection of open source examples and should not be treated as an officially supported product. Use at your own risk. If you encounter any problems, please log an [issue](https://github.com/kylefernandadams/box-react-starter/issues).

## License

The MIT License (MIT)

Copyright (c) 2021 Kyle Adams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
