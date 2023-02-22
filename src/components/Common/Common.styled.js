import styled from '@emotion/styled'

export const Button = styled.button`
    padding:5px;
    display: flex;
    align-items:center;
    gap: 5px;
    height:38px;
    svg {
        zoom:1.3;
    }
`

export const Label = styled.label`
    display:flex;
    flex-direction:column;
    gap:7px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;

    input {
        font-size: 18px;
        padding:7px;
    }
`