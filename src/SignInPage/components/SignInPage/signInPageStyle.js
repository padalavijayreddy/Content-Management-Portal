import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const MainDiv = styled.div `${tw` flex justify-center bg-gray-300 items-center w-screen h-screen `}`;
const SubDiv = styled.div `${tw` w-1/3 `}`;
const Image = styled.div `${tw` flex flex-col items-center justify-center`}`;
const Logo = styled.img `${tw` flex self-center`}`;
const SignUp = styled.div `${tw` block text-black text-2xl font-bold mb-2`}`;
const Form = styled.form `${tw` bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}`;
const UserInputDiv = styled.div `${tw` mb-4`}`;
const UserInputLabel = styled.label `${tw` block text-gray-600 text-sm mb-2`}`;
const UserInput = styled.input `${tw` hover:shadow-xl border-black border-2 w-full py-1 px-2 text-gray-700 focus:outline-none `}`;
const PasswordInputDiv = styled.div `${tw` mb-6`}`;
const PasswordLabel = styled.label `${tw` block text-gray-600 text-sm mb-2`}`;
const PasswordInput = styled.input `${tw`hover:shadow-xl border-black border-solid border-2 w-full py-1 px-2 text-gray-700 focus:outline-none `}`;
const SubmitButton = styled.div `${tw` flex items-center justify-between mb-2`}`;
const Button = styled.button `{ 
    ${tw` text-center text-white py-1 px-2 rounded focus:outline-none w-64 h-10 focus:shadow-outline`}
    background:#0b69ff;
}`;
const ErrorMessage = styled.div `${tw` text-blue-500 text-xs italic`}`;
const Forgot = styled.div `${tw` inline-block align-baseline border border-transparent hover:border-black p-1 font-bold text-sm text-blue-500 hover:text-blue-800`}`;
const Footer = styled.div `${tw` flex justify-center text-xs`}`;
const NoAccount = styled.div `${tw` text-center text-black`}`;
const AnchorTag = styled.a `{
    color:#0b69ff;
    }`;

export {
    MainDiv,
    SubDiv,
    Logo,
    Image,
    SignUp,
    Form,
    UserInputDiv,
    UserInputLabel,
    UserInput,
    PasswordInputDiv,
    PasswordLabel,
    PasswordInput,
    SubmitButton,
    Button,
    ErrorMessage,
    Forgot,
    Footer,
    NoAccount,
    AnchorTag
};


//const PasswordInputDiv = styled(Typo32DarkBlueGreyRubikRegular)``
