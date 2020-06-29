import { object } from "@storybook/addon-knobs"

const envVariables = process.env

const Config = {}

Object.keys(envVariables).forEach(variable => {
    if (variable.includes('REACT_APP')) {
        const envKey = variable.replace('REACT_APP_', '')
        Config[envKey] = envVariables[variable]
    }
})

export default Config