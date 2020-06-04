import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { colors } from '../../../../CommonModule/components/themes/colors';

export const HeaderView = styled.div `
    display:flex;
    justify-content:flex-end;
    border:1px solid ${colors.lightBlueGrey};
    display:flex;
    width:100%;
    height:100%;
`,
    LanguageSelect = styled.select `
    width: 144px;
    height: 40px;
    border-radius: 2px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color: rgba(126, 133, 142, 0.04);
`,
    FileName = styled.div `
    width: 149px;
    height: 16px;
    font-family: HKGrotesk;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color:${colors.steel};
`,
    FileNameBox = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    width: 186px;
    height: 32px;
    border-radius: 4px;
    border: solid 1px ${colors.lightBlueGrey};
    background-color: rgba(126, 133, 142, 0.04);
    margin:5px;
`,
    DeleteIcon = styled.img `
    width: 16px;
    height: 16px;
    object-fit: contain;
`,
    SelectFields = styled.div `
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:40%;
`,
    EditorIcon = styled.img `
    width: 16px;
    height: 16px;
    object-fit: contain;
`;
