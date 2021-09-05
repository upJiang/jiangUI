import { Component } from 'vue'
import Button from './__docs__/Button.md'

type MenuItemType = {
  name: string
  component: (() => Promise<Component>) | Component
}
type MenuType = {
  title: string
  items: MenuItemType[]
}

export default [
  {
    title: 'Basic',
    items: [
      { name: 'Button', component: Button },
    ]
  }
] as MenuType[]