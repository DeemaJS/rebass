import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  ButtonOutline,
  Pre
} from 'rebass'
import Logo from './Logo'

const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

const Root = styled(Banner)`
  background-attachment: fixed;
`

const Btn = styled(Button)`
  mix-blend-mode: overlay;
`

const Header = props => (
  <Banner
    py={[ 4, 5, 6 ]}
    color='white'
    bg='gray7'
    backgroundImage={photo}>
    <Logo />
    <Flex
      wrap
      mx={-3}
      py={5}
      align='center'>
      <Heading
        caps
        w={[ 1, null, 384 ]}
        px={3}
        is='h1'
        f={[ 6, 7, 8 ]}>
        Rebass
      </Heading>
      <Lead
        px={3}
        w={[ 1, 384 ]}>
        Functional React UI component library, built with styled-components
      </Lead>
      <Button
        is='a'
        href='https://github.com/jxnblk/rebass'
        f={2}
        color='black'
        bg='white'
        children='GitHub'
        mx={3}
        my={4}
      />
      <Pre mx={3}>npm i rebass</Pre>
      {false && (
        <ButtonOutline
          is='a'
          href='#!'
          f={2}
          m={2}
          color='white'
          children='Documentation'
        />
      )}
    </Flex>
  </Banner>
)

export default Header
