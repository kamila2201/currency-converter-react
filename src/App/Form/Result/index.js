import { Wrapper, Text } from "./styled";

const Result = ({ result }) => (

    <Wrapper>
        {!!result && (
            <p>
                You will receive
                <Text>
                    {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
                </Text>
            </p>
        )}
    </Wrapper>
)

export default Result;