const getBaseFolderFromType = (type) => {
  let baseFolder = ''
  switch (type) {
    case 'Content block':
      baseFolder = 'content-blocks'
      break
    case 'Layout':
      baseFolder = 'layouts'
      break
    case 'Element':
      baseFolder = 'elements'
      break
    case 'Styleguide':
      baseFolder = 'styleguide'
      break
    default:
      break
  }
  return baseFolder
}

const getBasePathFromType = (type) => {
  return './src/components/' + getBaseFolderFromType(type)
}

export default function (plop) {
  plop.setHelper('txt', (text) => `{{ ${text} }}`)
  plop.setHelper('stripUnderscores', (text) => text.split('_').join(''))
  plop.setHelper('capitalize', ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase())

  // Component Partials
  plop.setPartial('friendlyName', `{{type}}/{{capitalize name}}`)
  plop.setPartial('componentName', `{{stripUnderscores (pascalCase name)}}`)
  plop.setPartial('componentClassName', `{{stripUnderscores (dashCase name)}}`)
  plop.setPartial('componentPath', `{{stripUnderscores (dashCase type)}}`)

  // Question 1: Choose a component type
  const componentTypes = ['Content block', 'Layout', 'Element', 'Styleguide']
  const getComponentType = {
    type: 'list',
    name: 'type',
    message: 'Choose a component type',
    choices: componentTypes,
    validate(value) {
      return componentTypes.includes(value) ? true : 'Please choose a component type to proceed'
    }
  }

  // Question 2: Provide a component name
  const getComponentName = {
    type: 'input',
    name: 'name',
    message: 'What is your component name? (lowercase and spaces are best)',
    validate(value) {
      if (/.+/.test(value)) {
        return true
      }
      return 'Component name is required'
    }
  }

  // Component generator
  plop.setGenerator('component', {
    description: 'Generate a component and its related files',
    prompts: [getComponentType, getComponentName],
    actions: (data) => {
      let actions = []
      const componentType = data.type
      const basePath = getBasePathFromType(componentType)
      // Create component
      actions.push({
        type: 'add',
        path: basePath + '/{{pascalCase name}}/{{pascalCase name}}.ts',
        templateFile: '.plop-templates/component/ComponentTemplate.ts.hbs'
      })
      // Create story
      actions.push({
        type: 'add',
        path: basePath + '/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
        templateFile: '.plop-templates/component/ComponentTemplate.stories.ts.hbs'
      })
      // Create scss
      actions.push({
        type: 'add',
        path: basePath + '/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: '.plop-templates/component/ComponentTemplate.scss.hbs'
      })
      return actions
    }
  })
}
