import React from "react"
import Input from './Input'

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder='small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />

// You can rename the components
Small.storyName = 'Small Input'