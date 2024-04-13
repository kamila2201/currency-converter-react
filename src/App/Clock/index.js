import { useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled";

const Clock = () => {
    const date = useCurrentDate()

    return (
        <Wrapper>
            Today is {date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </Wrapper>
    )

}

export default Clock;