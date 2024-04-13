import {Paragraph, Text} from "./styled";

const Result = ({ result }) => (
    !!result && (
        <Paragraph>
            You will receive
            <Text>
                {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
            </Text>
        </Paragraph>
    )
)

export default Result;