<template>
  <CloudinaryImage
    v-if="assetUrl"
    :focal="imageFocus"
    :src="assetUrl"
    :alt="assetAlt"
    v-bind="$attrs"
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

      if (!this.asset.focus) {
        return undefined
      }

      if (!this.asset.width || !this.asset.height) {
        return undefined
      }

      let [x, y] = this.asset.focus.split('-')

      if (parseInt(x) === 50 || parseInt(y) === 50) {
        return undefined
      }

      x = (x * this.asset.width) / 100
      y = (y * this.asset.height) / 100

      return [parseInt(x), parseInt(y)]
    },
  },

  methods: {},
}
</script>
