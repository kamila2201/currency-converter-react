import { useCurrentDate } from "./useCurrentDate";
import { Paragraph } from "./styled";

const Clock = () => {
    const date = useCurrentDate()

    return (
        <Paragraph>
            Today is {date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </Paragraph>
    )

}

export default Clock;