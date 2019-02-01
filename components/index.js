import Vue from 'vue'
import HasError from './HasError'
import Button from './Button'
import { AlertError, AlertSuccess } from 'vform'

[
  AlertError,
  HasError,
  Button,
  AlertSuccess,
].forEach(Component => {
  Vue.component(Component.name, Component)
})
