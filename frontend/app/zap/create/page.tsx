"use client";
import { BACKEND_URL } from "@/app/config";
import Button_2 from "@/components/Button2";
import NavBar from "@/components/NavBar";
import ZapCell from "@/components/ZapCell";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function useAvailableActionsAndTriggers() {
  const [availableActions, setAvailableActions] = useState([]);
  const [availableTriggers, setAvailableTriggers] = useState([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/trigger/available`)
      .then((x) => setAvailableTriggers(x.data.availableTriggers));
    axios
      .get(`${BACKEND_URL}/api/v1/action/available`)
      .then((x) => setAvailableActions(x.data.availableActions));
  }, []);
  return { availableActions, availableTriggers };
}
const Page = () => {
  const { availableActions, availableTriggers } =
    useAvailableActionsAndTriggers();
  const [selectedModalIndex, setSelectedModalIndex] = useState<null | number>(
    null
  );
  const [selectedTrigger, setSelectedTrigger] = useState<{
    id: string;
    name: string;
    // image: string;
  }>();
  const [selectedActions, setSelectedActions] = useState<
    { index: number; availableActionId: string; availableActionName: string }[]
  >([]);

  return (
    <>
      <NavBar />
      <div className="border-2 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div>
            <ZapCell
              name={selectedTrigger ? selectedTrigger.name : "Trigger"}
              index={1}
              onClick={() => {
                setSelectedModalIndex(1);
              }}
            />
          </div>
          <div className="flex flex-col justify-center w-full ">
            {selectedActions.map((action) => (
              <ZapCell
                key={
                  action.availableActionId
                    ? action.availableActionId
                    : `${Math.random()}`
                }
                onClick={() => {
                  setSelectedModalIndex(action.index);
                }}
                name={
                  action.availableActionName
                    ? action.availableActionName
                    : "Action"
                }
                index={action.index}
              />
            ))}
          </div>
          <div>
            <Button_2
              text="+"
              classes="w-full rounded-3xl"
              onClick={() => {
                setSelectedActions((a) => [
                  ...a,
                  {
                    availableActionId: "",
                    availableActionName: "",
                    index: a.length + 2,
                  },
                ]);
              }}
            />
          </div>
        </div>
      </div>
      {selectedModalIndex && (
        <Modal
          availableItems={
            selectedModalIndex == 1 ? availableTriggers : availableActions
          }
          index={selectedModalIndex}
          onSelect={(props: null | { name: string; id: string }) => {
            if (props === null) {
              setSelectedModalIndex(null);
              return;
            }
            if (selectedModalIndex === 1) {
              setSelectedTrigger({ id: props.id, name: props.name });
            } else {
              setSelectedActions((a) => {
                const newActions = [...a];
                newActions[selectedModalIndex - 2] = {
                  index: selectedModalIndex,
                  availableActionId: props.id,
                  availableActionName: props.name,
                };
                return newActions;
              });
            }
            setSelectedModalIndex(null);
          }}
        />
      )}
    </>
  );
};

function Modal({
  index,
  onSelect,
  availableItems,
}: {
  index: number;
  onSelect: (props: null | { name: string; id: string }) => void;
  availableItems: { id: string; name: string; image: string }[];
}) {
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => {
                onSelect(null);
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            {availableItems.map((availableItem) => (
              <div
                key={availableItem.id}
                onClick={() => {
                  onSelect({ id: availableItem.id, name: availableItem.name });
                }}
              >
                <Image
                  src={availableItem.image}
                  alt="ww"
                  width={10}
                  height={10}
                />{" "}
                <div>{availableItem.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
