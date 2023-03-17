import * as React from "react"
import {useState} from "react"
import {JpdbVocabulary} from "../model/JpdbVocabulary"
import {Portal, usePopper} from "@chakra-ui/react"
import {JpdbPopupDialog} from "./JpdbPopupDialog"
import {JpdbRule} from "../model/JpdbRule"
import {JpdbPopup} from "../model/JpdbPopup"

interface Props {
  wrapper: (reference: React.Ref<any>) => JSX.Element,
  rule: JpdbRule,
  vocabulary?: JpdbVocabulary,
  miningDeckId: number,
  mouseOverReference: boolean,
  placement: "right" | "bottom",
}

export default function JpdbPopupWrapper(
  {
    wrapper,
    rule,
    vocabulary,
    miningDeckId,
    mouseOverReference,
    placement,
  }: Props
) {

  const {popperRef, referenceRef} = usePopper({placement: placement})

  const [mouseOverPopup, setMouseOverPopup] = useState(false)

  const popupOpen = mouseOverReference || mouseOverPopup
  const popupPossible = vocabulary && rule.popup !== JpdbPopup.None

  return <>
    {wrapper(referenceRef)}
    {popupOpen && popupPossible && <Portal>
      <JpdbPopupDialog
        ref={popperRef}
        vocabulary={vocabulary}
        miningDeckId={miningDeckId}
        compact={rule.popup === JpdbPopup.Compact}
        onMouseOver={(over) => setMouseOverPopup(over)}
      />
    </Portal>
    }
  </>
}
