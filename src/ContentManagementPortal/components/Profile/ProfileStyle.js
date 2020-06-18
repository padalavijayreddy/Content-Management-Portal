import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProfileDiv = styled.div `
    ${tw`flex fixed top-0 right-0 z-10 w-1/3`}
    width:${props => !props.shouldDisplayCart?'0%':''};
    transition: width 0.3s;
`;
const DeleteButton = styled.button `${tw`h-10 p-3 text-white bg-blue-800 focus:outline-none active:outline-none leading-none`}`;
const ProfileMainDiv = styled.div `${tw`h-screen p-4 bg-blue-800 flex flex-col w-full items-center justify-around`}`;
const SignoutButton = styled.button `${tw`text-white border-white border-solid border-2 font-bold text-xl z-10 p-2`}`;
const ProfileImage = styled.img `
    ${tw`border-gray-800 m-2 cursor-pointer h-48 w-1/2 p-1 rounded text-xs`}
      border-radius:50%;
`;

export {
    ProfileDiv,
    DeleteButton,
    ProfileMainDiv,
    SignoutButton,
    ProfileImage
};
