import { DropdownCard } from "./styles/Card.styled";
import checker from "../assets/check-small.svg";

export default function DropWrapper(props) {
    return(
       <DropdownCard>
            <p>{props.title}</p>
            {props.isChecked && <img src={checker} />}
       </DropdownCard>
    )
}