import React from 'react'
import ReactYarnVisualNovel from '../src/index'
import { ErrorBoundary } from 'react-error-boundary'
import './styles.css'

const dialogue = `
title: Start
---
I am a line that is long enough to wrap around smaller text boxes
-> I am an option
  I am the line after the first option!
-> I am a second option
  I am the line after the second option!
-> I am a disabled option<<if false is true>>
  X
I am another line.
<<if true == true>>
Let's jump!
<<jump Two>>
<<else>>
X
<<endif>>
===

title: Two
---
You Jumped!
===
`

export default {
  title: 'ReactYarnVisualNovel',
  component: ReactYarnVisualNovel,
  className: 'react-yarn-visual-novel',
  args: {
    dialogue,
  },
  argTypes: {
    dialogue: {
      control: 'text'
    }
  }
}

const Template = (props) => {
  return (
    <div className="story">
      <ErrorBoundary
        resetKeys={[props.dialogue]}
        fallbackRender={({ error }) => {
          return (
            <div>
              Invalid Dialogue: {error.message}
            </div>
          )
        }}
      >
        <ReactYarnVisualNovel
          {...props}
          onDialogueEnd={() => { alert('onDialogueEnd called') }}
        />
      </ErrorBoundary>
    </div>
  )
}

export const Basic = Template.bind({})
