import styled from 'styled-components/native'
import {useTheme} from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.COLORS.GRAY_100}
`
export const LoadIndicator = styled.ActivityIndicator.attrs((props) => ({
    color: props.theme.COLORS.GREEN_500 || 'yellow'
}))``