import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProfileDiv = styled.div `
    ${tw`flex fixed top-0 right-0 z-10 w-1/4`}
    width:${props => !props.shouldDisplayCart?'0%':''};
    transition: width 0.3s;
`;
const DeleteButton = styled.button `${tw`h-10 p-3 text-white bg-blue-600 hover:bg-red-900 focus:outline-none active:outline-none leading-none`}`;
const ProfileMainDiv = styled.div `${tw`h-screen bg-white flex flex-col w-full items-center justify-between border-black border-2 border-solid`}`;

const SignoutButton = styled.button `${tw`flex w-full justify-around items-center font-bold text-sm hover:text-lg`}`;

const BorderButton = styled.div `${tw`z-10 w-full flex h-8`}`

const ProfileImage = styled.img `
    ${tw`border-gray-800 cursor-pointer h-24 w-18 m-2 p-1 rounded hover:text-xl text-xs`}
      border-radius:50%;
`;
const AccountCenterDiv = styled.div `
    ${tw`flex w-full items-center justify-between h-48 bg-blue-600`}
`;

const EmailId = styled.span `
    ${tw`text-sm text-white`}
`;

const AccountCenterP = styled.p `
    ${tw`font-bold text-xl`}
`;

const UserOptions = styled.div `
    ${tw`flex w-full flex-col h-64 justify-around items-center`}
`;

const Option = styled.div `
    ${tw`flex w-full justify-around items-center font-bold text-sm hover:text-lg`}
`;

const AccountCenter = styled.div `
    ${tw`flex flex-col w-full justify-between items-center`}
`;

export {
    ProfileDiv,
    DeleteButton,
    ProfileMainDiv,
    SignoutButton,
    ProfileImage,
    AccountCenterDiv,
    EmailId,
    AccountCenterP,
    UserOptions,
    Option,
    AccountCenter,
    BorderButton
};
