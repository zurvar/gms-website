import React from 'react';
import * as Styled from './styles';
import {Display, Height, Length, Tone} from "helpers/definitions";
import tw from 'twin.macro'

const AnimationLines: React.FC = () => {

  return (
    <Styled.Canvas>    
      <Styled.Line
          tone = {Tone.GREEN_BRIGHT}
          length = {Length.VERY_LONG}
          height = {Height.VERY_SMALL}
          display = {Display.LEFT}
          animate={{ x: [-100, 0, 0, 0, 0, -100,-100] }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }} />
      <Styled.Line
          tone = {Tone.GREEN_MEDIUM}
          length = {Length.LONG}
          height = {Height.SMALL}
          display = {Display.LEFT}
          animate={{ x: [-100, 0, 0, -100,-100] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} />
        <Styled.Line
          tone = {Tone.RED_DARK}
          length = {Length.MEDIUM}
          height = {Height.SMALL}
          display = {Display.LEFT}
          animate={{ x: [-100, 0, 0, 0, -100, -100, -100] }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }} />
    
    <Styled.Space height={Height.VERY_SMALL} />

      <Styled.Space height={Height.SMALL} />

      <Styled.Line
          tone = {Tone.YELLOW_BRIGHT}
          length = {Length.SHORT}
          height = {Height.VERY_SMALL}
          display = {Display.RIGHT}
          animate={{ x: [0, -100, 0] }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }} />
      <Styled.Line
          tone = {Tone.BLUE_MEDIUM}
          length = {Length.MEDIUM}
          height = {Height.SMALL}
          display = {Display.RIGHT}
          animate={{ x: [-100, 0, -100] }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }} />
        <Styled.Line
          tone = {Tone.BLUE_DARK}
          length = {Length.VERY_LONG}
          height = {Height.MEDIUM}
          display = {Display.RIGHT}
          animate={{ x: [-50, 100,-50] }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }} />

        <Styled.Space height={Height.SMALL} />

        <Styled.Space height={Height.SMALL} />

<Styled.Line
          tone = {Tone.BLUE_DARK}
          length = {Length.SHORT}
          height = {Height.VERY_SMALL}
          display = {Display.LEFT}
          animate={{ x: [-100, 100, 100, -100, -100] }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }} />
<Styled.Line
          tone = {Tone.BLUE_BRIGHT}
          length = {Length.MEDIUM}
          height = {Height.MEDIUM}
          display = {Display.LEFT}
          animate={{ x: [-100, 0, 0, -100] }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }} />
  <Styled.Line
          tone = {Tone.YELLOW_BRIGHT}
          length = {Length.LONG}
          height = {Height.VERY_SMALL}
          display = {Display.LEFT}
          animate={{ x: [-200, 0, -200] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} />

  <Styled.Space height={Height.VERY_SMALL} />
  <Styled.Line
          tone = {Tone.RED_MEDIUM}
          length = {Length.MEDIUM}
          height = {Height.SMALL}
          display = {Display.RIGHT}
          animate={{ x: [0, 200, 0] }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }} />
    <Styled.Line
          tone = {Tone.GREEN_DARK}
          length = {Length.SHORT}
          height = {Height.MEDIUM}
          display = {Display.RIGHT}
          animate={{ x: [50, -250, 50] }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }} />
    <Styled.Line
          tone = {Tone.GREEN_BRIGHT}
          length = {Length.LONG}
          height = {Height.VERY_SMALL}
          display = {Display.RIGHT}
          animate={{ x: [100, -200, 100] }}
          transition={{ ease: "linear", duration: 12, repeat: Infinity }} />
    </Styled.Canvas>
  );
};


export default AnimationLines;
