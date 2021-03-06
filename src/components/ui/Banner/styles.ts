import tw, { styled } from "twin.macro"

export const Banner = styled.section`
  ${tw`bg-background flex flex-col justify-center items-center pt-5 md:pt-10`};
`;

export const TitleWrapper = styled.div`
  ${tw`p-2`};
`;

export const Title = styled.h1`
  ${tw`bg-background text-center 
        text-gray-50
        text-xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-extrabold font-nunitosans`};
`;

export const SubTitle = styled.h2`
  ${tw`mb-8 text-center 
        md:mt-2
        text-gray-50
        text-xs sm:text-lg md:text-xl lg:text-2xl 
        font-semibold font-nunitosans`};
`;

export const ImageContainer = styled.div`
${tw`
  md:w-full xl:w-7/12 
  md:px-10 xl:px-0
  h-screen md:h-auto pb-20 -my-10 md:my-0 overflow-y-hidden`
  
};

@media only screen 
and (max-width: 750px) {

  .art-directed {
    margin-top: 50px;
    min-height: 100vh;
  }
}

@media only screen 
and (max-width: 750px)
and (orientation:landscape)  {
  img {
    object-fit:scale-down !important;
  }
}

`;