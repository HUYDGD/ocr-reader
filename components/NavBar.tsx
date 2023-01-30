import {Button, Flex, Spacer} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher"
import React from "react"
import {useRouter} from "next/router"
import {homeRoute, settingsRoute, textHookerRoute} from "../util/Route"

export default function NavBar() {
  const router = useRouter()

  return <Flex pb={4}>
    <Button size='sm' colorScheme='current' variant='link' onClick={() => router.push(homeRoute())} pr={4}>
      Reader
    </Button>
    <Button size='sm' colorScheme='current' variant='link' onClick={() => router.push(textHookerRoute())} pr={4}>
      Text hooker
    </Button>
    <Button size='sm' colorScheme='current' variant='link' onClick={() => router.push(settingsRoute())}>
      Settings
    </Button>
    <Spacer/>
    <ColorModeSwitcher/>
  </Flex>
}
