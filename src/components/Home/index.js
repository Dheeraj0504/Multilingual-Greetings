import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  onClickButton = id => {
    // console.log(id)
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state

    const objectDetails = languageGreetingsList.find(
      eachGreeting => eachGreeting.id === activeTabId,
    )
    // console.log(objectDetails)

    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Multilingual Greetings</Heading>
          <UnorderedList>
            {languageGreetingsList.map(eachLanguage => (
              <ListItem key={eachLanguage.id}>
                <Button
                  type="button"
                  onClick={() => this.onClickButton(eachLanguage.id)}
                  isActiveTab={eachLanguage.id === activeTabId}
                >
                  {eachLanguage.buttonText}
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
          <Image
            src={objectDetails.imageUrl}
            alt={objectDetails.imageAltText}
          />
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default Home
