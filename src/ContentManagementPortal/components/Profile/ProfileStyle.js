import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const ProfileDiv = styled.div`
    ${tw`flex fixed top-0 right-0 z-10 w-1/4`}
    width:${props => (!props.shouldDisplayCart ? '0%' : '')};
    transition: width 0.3s;
`
const DeleteButton = styled.button`
   ${tw`h-10 p-3 text-white bg-blue-600 hover:bg-red-900 focus:outline-none active:outline-none leading-none`}
`
const ProfileMainDiv = styled.div`
   ${tw`h-screen bg-white flex flex-col w-full items-center justify-between border-black border-2 border-solid`}
`

const SignOutButton = styled.button`
   ${tw`flex w-full justify-around items-center font-bold lg:text-sm xl:text-lg hover:text-blue-600`}
`

const ProfileImage = styled.img`
   ${tw`border-gray-800 cursor-pointer h-24 w-18 m-2 p-1 rounded hover:text-xl text-xs`}
   border-radius:50%;
`
const AccountCenterDiv = styled.div`
   ${tw`flex w-full items-center justify-between bg-blue-600`}
   height:40vh;
`

const EmailId = styled.span`
   ${tw`text-sm text-white`}
`

const AccountCenterP = styled.p`
   ${tw`font-bold text-xl`}
`

const UserOptions = styled.div`
   ${tw`flex w-full flex-col justify-around items-center p-5`}
   height: 40vh;
`

const Option = styled.div`
   ${tw`flex w-full justify-around items-center font-bold lg:text-sm xl:text-lg hover:text-blue-600`}
`

const AccountCenter = styled.div`
   ${tw`flex flex-col w-full justify-between items-center`}
`

export {
   ProfileDiv,
   DeleteButton,
   ProfileMainDiv,
   SignOutButton,
   ProfileImage,
   AccountCenterDiv,
   EmailId,
   AccountCenterP,
   UserOptions,
   Option,
   AccountCenter
}
