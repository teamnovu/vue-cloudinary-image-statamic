# Vue-Cloudinary-Image-Statamic

Statamic adapter for [@teamnovu/nuxt-cloudinary-image](https://github.com/teamnovu/nuxt-cloudinary-image) and [@teamnovu/vue-cloudinary-image](https://github.com/teamnovu/vue-cloudinary-image).

## Features
✅ Handles Statamic Image Assets  
✅ Automatically applies `alt` attribute  
✅ Automatically applies Statamic focal point

## Prerequisites

Install and configure either [@teamnovu/nuxt-cloudinary-image](https://github.com/teamnovu/nuxt-cloudinary-image) or [@teamnovu/vue-cloudinary-image](https://github.com/teamnovu/vue-cloudinary-image) first. Visit these projects for instructions.

Make sure the asset includes `width`, `height` and `focal` data.

Example Statamic `CustomAsset`: 
```php
<?php

namespace App\Entries;

use Statamic\Assets\Asset;

class CustomAsset extends Asset
{
    protected function shallowAugmentedArrayKeys()
    {
        return ['id', 'url', 'permalink', 'api_url', 'extension', 'is_image', 'focus', 'width', 'height'];
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
