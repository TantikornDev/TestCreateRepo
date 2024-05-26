---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Levis"
  text: "A binary tool designed to simplify the deployment process"
  tagline: for users who don’t need to focus on the complexities of Kubernetes objects.
  actions:
    - theme: brand
      text: Getting Started
      link: docs/getting-started
    - theme: alt
      text: Examples
      link: docs/levis-examples
  image: {
      light: '/assets/logo-white-line.png',
      dark: '/assets/logo-white-line-dark.png',
      alt: Levis
  }

features:
  - title: Short and Simple
    details: Let's generate K8s Manifest with Simple configuration and meaningful
  - title: Full and Meaningful
    details: Full customization of easy configuration of K8s Manifest and meaningful
  - title: Suggestion
    details: If you don't know how to using appropriate configuration, let use our suggestion configuration
---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
}

</style>
