import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { KeyBooleanValuePair, ListType, Requirement } from "../data/";
import { useLocalStorage } from "../hooks/useLocalStorage";
import cloneDeep from "lodash.clonedeep";
import ToggleButtonIcon from "./toggleButtonIcon";

interface Props {
  key: string;
  list: ListType;
  showCompleted: boolean;
  accordionState: KeyBooleanValuePair;
  setAccordionState: Dispatch<SetStateAction<Object>>;
}

const checkboxInputStyles =
  "mr-2 rounded text-lies-of-p-gunmetal focus:border-lies-of-p-air-force-blue focus:ring focus:ring-offset-0 focus:ring-lies-of-p-paynes-gray focus:ring-opacity-50";

const CheckboxContainer = (props: Props) => {
  const { list, showCompleted, accordionState, setAccordionState } = props;
  const [isAllTrue, setIsAllTrue] = useState<boolean>(false);
  const [numberOfCompletedEntries, setNumberOfCompletedEntries] =
    useState<number>(0);

  const isOpen = accordionState[list.id];

  const storageKeyName = `checklist_${list.id}`;
  const hasRequirements = Boolean(list.requirements);

  // add all ids and default checked values into a single object key/value pair.
  const defaultValuesHash = list.requirements ? list.requirements.reduce(
    (object, item) => ({ ...object, [item.id]: false }),
    {}
  ) : {[list.id]: false};

  const totalEntries = Object.keys(defaultValuesHash?? {} ).length;

  const [checkedState, setCheckedState] = useLocalStorage(
    storageKeyName,
    defaultValuesHash
  );

  useEffect(() => {
    const booleanArray: boolean[] = Object.values(checkedState);

    // keep every true value and count it.
    setNumberOfCompletedEntries(booleanArray.filter(Boolean).length);

    // short hand version of checking if every value is true.
    setIsAllTrue(booleanArray.every(Boolean));
    
  }, [checkedState]);

  const toggleAllCheckboxes = () => {
    const booleanArray: boolean[] = Object.values(checkedState);

    // if they are all true, get back false to assign to every id.
    const toggleBoolean = !booleanArray.every(Boolean);

    // just recreate the single object with all values set to the toggleBoolean.
    const flippedCheckedHash = list.requirements? list.requirements.reduce(
      (object, item) => ({ ...object, [item.id]: toggleBoolean }),
      {}
    ) : {[list.id]: toggleBoolean} ;

    setCheckedState(flippedCheckedHash);
  };

  const handleAccordionChange = (key: string) => {
    const newAccordionState = cloneDeep(accordionState);

    newAccordionState[key] = !newAccordionState[key];

    setAccordionState(newAccordionState);
  };

  const handleOnChange = (id: string) => {
    const newCheckData = cloneDeep(checkedState);

    newCheckData[id] = !newCheckData[id];

    setCheckedState(newCheckData);
  };

  return (
    <fieldset
      className={`my-4 ${isAllTrue && !showCompleted ? "hidden" : "block"}`}
    >
      <legend
        className={`border-2 border-solid ${
          isOpen ? "rounded-t" : "rounded"
        } border-lies-of-p-black bg-lies-of-p-prussian-blue w-full`}
      >
        <div className="flex justify-between">
          <div className="flex items-center p-2">
            <input
              id={list.id}
              type="checkbox"
              checked={!!isAllTrue}
              onChange={() => toggleAllCheckboxes()}
              className={checkboxInputStyles}
            />
            {list.imageUrl && (
              <div className="flex items-center">
                {/* not compatible with next export and therefore github pages. */}
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={list.imageUrl}
                  alt={list.imageAlt}
                  title={list.imageAlt}
                  width={120}
                  height={67}
                  role="img"
                />
              </div>
            )}
            <div className="flex-grow ml-3">
              <label
                htmlFor={list.id}
                className="text-white leading-none"
              >
                {list.url ? (
                  <a
                    href={list.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-lies-of-p-paynes-gray"
                  >
                    {list.name}
                  </a>
                ) : (
                  <strong>{list.name}</strong>
                )}
              </label>
              {list.description && (<label
                htmlFor={list.id}
                className="text-white leading-none"
              >
                <br/>
                {list.description}
              </label>)}
            </div>
            </div>
          {list.requirements && (<div
            className="flex flex-1 items-center justify-end cursor-pointer p-2"
            onClick={() => handleAccordionChange(list.id)}
          >
            <span className="mr-4 text-white select-none">
              {numberOfCompletedEntries}/{totalEntries}
            </span>
            <button>
              <ToggleButtonIcon isOpen={isOpen} />
            </button>
          </div>)}
        </div>
      </legend>
      <div
        className={`p-2 border-x-2 border-b-2 border-solid rounded-b border-lies-of-p-black bg-neutral-700 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {list.requirements?.map(({ id, name, description, description_2, url, mapLink }) => (
          <div
            key={id}
            className={!showCompleted && checkedState[id] ? "hidden" : "block"}
          >
            <div
              className="bg-neutral-600 rounded p-2 m-2"
            >
              <div className="flex items-center">
                <input
                  id={id}
                  type="checkbox"
                  checked={!!checkedState[id]}
                  onChange={() => handleOnChange(id)}
                  className={checkboxInputStyles}
                />
                <div className="flex-grow">
                  <label className="text-white" htmlFor={id}>
                    {name ? (<strong>{name}<br/></strong>) : null}
                  </label>
                  <label className="text-white" htmlFor={id}>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={-1}
                        className="underline text-lies-of-p-paynes-gray"
                      >
                        {description}
                      </a>
                    ) : (
                      description
                    )}
                  </label>
                  <label className="ml-2 text-white" htmlFor={id}>
                    {description_2 ? (<i><br/>{description_2}</i>) : null}
                  </label>
                  {
                    mapLink ?
                    (
                      <span>
                        <span> [</span>
                        <a
                          href={mapLink}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={-1}
                          className="underline text-lies-of-p-persian-gold">
                            Map Link
                        </a>
                        <span>]</span>
                      </span>
                    ) : null }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxContainer;
