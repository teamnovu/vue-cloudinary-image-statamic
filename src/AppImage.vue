<template>
  <CloudinaryImage
    v-if="assetUrl"
    :focal="imageFocus"
    :src="assetUrl"
    :alt="assetAlt"
    v-bind="$attrs"
    :width="imageWidth"
    :height="imageHeight"
    :aspect-ratio="aspectRatio"
  />
</template>

<script>
export default {
  components: {},

  props: {
    src: {
      type: [String, Object],
      required: true,
    },

    alt: {
      type: String,
      default: null,
    },

    focus: {
      type: String,
      default: undefined,
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    height: {
      type: [String, Number],
      default: undefined,
    },
    aspectRatio: {
      type: Number,
      default: undefined,
    },
  },

  computed: {
    asset () {
      if (this.isStringSrc) {
        return { permalink: this.src }
      }

      return this.src
    },

    isStringSrc () {
      return typeof this.src === 'string' || this.src instanceof String
    },

    assetUrl () {
      if (!this.asset?.permalink) {
        return null
      }

      return this.asset.permalink.replace(/https?:\/\/[^/]+/i, '')
    },

    assetAlt () {
      if (this.alt) {
        return this.alt
      }

      return this.asset.alt
    },

    imageFocus () {
      if (this.focus) {
        return this.focus
      }

      if (!this.asset.focus && !this.asset.focus_css) {
        return undefined
      }

      if (!this.asset.width || !this.asset.height) {
        return undefined
      }

      let x, y

      if (this.asset.focus) {
        [x, y] = this.asset.focus.split('-')
      } else if (this.asset.focus_css) {
        [x, y] = this.asset.focus_css.replace(/%/g, '').split(' ')
      }

      if (parseInt(x) === 50 || parseInt(y) === 50) {
        return undefined
      }

      x = (x * this.asset.width) / 100
      y = (y * this.asset.height) / 100

      return [parseInt(x), parseInt(y)]
    },
    imageWidth () {
      if (this.width) {
        return this.width
      }

      if ((this.asset.width && this.asset.height) || (this.asset.width && this.asset.aspectRatio)) {
        return this.asset.width
      }

      if (this.asset.aspectRatio && this.asset.height && Number(this.asset.height) > 0) {
        return this.asset.height * this.asset.aspectRatio
      }

      return undefined
    },
    imageHeight () {
      if (this.height) {
        return this.height
      }

      if ((this.asset.width && this.asset.height) || (this.asset.height && this.asset.aspectRatio)) {
        return this.asset.height
      }

      if (this.asset.aspectRatio && this.asset.width && Number(this.asset.width) > 0) {
        return this.asset.width / this.asset.aspectRatio
      }

      return undefined
    },
  },

  methods: {},
}
</script>
