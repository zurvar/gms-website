import { motion } from "framer-motion";
import { AnimationDisplayParams, Display } from "helpers/definitions";
import tw, { styled } from "twin.macro"


export const Header = styled.header`
  ${tw`bg-background -mb-px shadow-xl`};
`;

export const Wrapper = styled(motion.div)<AnimationDisplayParams>`
  ${tw`flex flex-wrap w-full mx-auto px-5 pt-5 pb-5 items-center`};
  ${params => 
    params.shouldAnimate ? 
      (params.display == Display.LEFT ? tw`max-w-screen-md` : tw`max-w-full`) : 
      (params.display == Display.LEFT ? tw`max-w-full` : tw`max-w-screen-md`) 
    }
`;
