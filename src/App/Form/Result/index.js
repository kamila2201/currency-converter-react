import { Wrapper, Text, ResultText } from "./styled";

const Result = ({ result }) => (
    <Wrapper>
        {!!result && (
            <Text>
                You will receive
                <ResultText>
                    {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
                </ResultText>
            </Text>
        )}
    </Wrapper>
)

export default Result;