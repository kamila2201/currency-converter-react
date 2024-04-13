import {Wrapper, Text} from "./styled";

const Result = ({ result }) => (
    !!result && (
        <Wrapper>
            You will receive
            <Text>
                {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
            </Text>
        </Wrapper>
    )
)

export default Result;