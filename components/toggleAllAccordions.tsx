import { Dispatch, SetStateAction, useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { KeyBooleanValuePair } from "../data";

interface Props {
  accordionState: KeyBooleanValuePair;
  setAccordionState: Dispatch<SetStateAction<Object>>;
}

const ToggleAllAccordions = (props: Props) => {
  const { accordionState, setAccordionState } = props;
  const [buttonName, setButtonName] = useState<string>("Open All");

  const toggleAll = () => {
    const booleanArray: boolean[] = Object.values(accordionState);

    const isAllOpen = booleanArray.every(Boolean);

    const newAccordionState = cloneDeep(accordionState);

    Object.keys(newAccordionState).forEach((key: string) => {
      newAccordionState[key] = !isAllOpen;
    });
    setAccordionState(newAccordionState);
  };

  useEffect(() => {
    const booleanArray: boolean[] = Object.values(accordionState);
    const isAllOpen = booleanArray.every(Boolean);

    isAllOpen ? setButtonName("Close All") : setButtonName("Open All");
  }, [accordionState]);

  return (
    <button
      className="rounded-full bg-lies-of-p-gunmetal p-3"
      onClick={() => toggleAll()}
    >
      <span>{buttonName}</span>
    </button>
  );
};

export default ToggleAllAccordions;
