# Vue-Cloudinary-Image-Statamic

Statamic adapter for [@teamnovu/nuxt-cloudinary-image](https://github.com/teamnovu/nuxt-cloudinary-image) and [@teamnovu/vue-cloudinary-image](https://github.com/teamnovu/vue-cloudinary-image).

## Features
✅ Handles Statamic Image Assets  
✅ Automatically applies `alt` attribute for the current locale *
✅ Automatically applies Statamic focal point

* For the i18n support, `alt_{langcode}` fields are assumed on asset blueprint and data. It will fallback to `alt` if not available.

## Prerequisites

Install and configure either [@teamnovu/nuxt-cloudinary-image](https://github.com/teamnovu/nuxt-cloudinary-image) or [@teamnovu/vue-cloudinary-image](https://github.com/teamnovu/vue-cloudinary-image) first. Visit these projects for instructions.

Make sure the asset includes `width`, `height`, `focus` and the different `alt_{langcode}` data. 

Example Statamic `CustomAsset`: 
```php
<?php

namespace App\Entries;

use Statamic\Assets\Asset;

class CustomAsset extends Asset
{
    protected function shallowAugmentedArrayKeys()
    {
        return ['id', 'url', 'permalink', 'api_url', 'extension', 'is_image', 'focus', 'width', 'height', 'alt_de', 'alt_fr'];
    }
}
```

Example Statamic GraphQL fragment:
```graphql
  fragment AssetImage on AssetInterface {
    id
    url
    permalink
    extension
    is_image
    focus_css
    width
    height
    ... on Asset_Assets {
      alt_de
      alt_fr
    }
  }
```

## Installation

```shell
yarn add @teamnovu/vue-cloudinary-image-statamic
```
or
```shell
npm i @teamnovu/vue-cloudinary-image-statamic
```

For vue2 use a version < v1.0.0

## Setup

### Global
```javascript
import AppImage from '@teamnovu/vue-cloudinary-image-statamic'

Vue.use(AppImage);
```

### Local
```html
<script>
import AppImage from '@teamnovu/vue-cloudinary-image-statamic'

export default {
  components: {
    AppImage,
  }
}
<script>
```

## Usage

```html
<!-- just provide the statamic asset object as parameter -->
<AppImage :src="data.image" />
```

The component uses the data

## Example

### Minimal example
```html
<!-- just provide the statamic asset object as parameter -->
<AppImage :src="data.image" />
```

### Simple Avatar Crop
```html
<AppImage
  :src="data.image"
  :aspect-ratio="1"
  crop="thumb"
  focus="face"
/>
```

### Overwrite alt attribute
```html
<AppImage
  :src="data.image"
  alt="this is used instead of the asset alt attribute"
/>
```
