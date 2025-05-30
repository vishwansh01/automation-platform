"use client";
import { BACKEND_URL } from "@/app/config";
import Button_2 from "@/components/Button2";
import Button_3 from "@/components/Button3";
import EmailSelector from "@/components/EmailSelector";
import NavBar from "@/components/NavBar";
import SolanaSelector from "@/components/SolanaSelector";
import ZapCell from "@/components/ZapCell";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { availableActions, availableTriggers } =
    useAvailableActionsAndTriggers();
  const [selectedModalIndex, setSelectedModalIndex] = useState<null | number>(
    null
  );
  const [selectedTrigger, setSelectedTrigger] = useState<{
    id: string;
    name: string;
    image?: string;
  }>();
  const [selectedActions, setSelectedActions] = useState<
    {
      index: number;
      availableActionId: string;
      availableActionName: string;
      availableActionImage?: string;
      metadata: unknown;
    }[]
  >([]);

  return (
    <>
      <NavBar />
      <div className="flex justify-end mx-4 my-2">
        <Button_3
          text="Publish"
          classes="rounded-xl"
          onClick={async () => {
            if (!selectedTrigger?.id) {
              return;
            }
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/zap`,
              {
                availableTriggerId: selectedTrigger.id,
                triggerMetadata: {},
                actions: selectedActions.map((a) => ({
                  availableActionId: a.availableActionId,
                  actionMetadata: a.metadata,
                })),
              },
              { headers: { Authorization: localStorage.getItem("token") } }
            );
            if (response.data) router.push("/dashboard");
          }}
        />
      </div>
      <div className="border-2 ">
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="cursor-pointer">
              <ZapCell
                name={selectedTrigger ? selectedTrigger.name : "Trigger"}
                index={1}
                image={selectedTrigger?.image}
                onClick={() => {
                  setSelectedModalIndex(1);
                }}
              />
            </div>
            <div className="flex flex-col cursor-pointer justify-center w-full ">
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
                  image={action.availableActionImage}
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
                      // availableActionImage: "",
                      metadata: {},
                    },
                  ]);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedModalIndex && (
        <Modal
          availableItems={
            selectedModalIndex == 1 ? availableTriggers : availableActions
          }
          index={selectedModalIndex}
          onSelect={(
            props: null | {
              name: string;
              id: string;
              image?: string;
              metadata: unknown;
            }
          ) => {
            if (props === null) {
              setSelectedModalIndex(null);
              return;
            }
            if (selectedModalIndex === 1) {
              setSelectedTrigger({
                id: props.id,
                name: props.name,
                image: props.image,
              });
            } else {
              setSelectedActions((a) => {
                const newActions = [...a];
                newActions[selectedModalIndex - 2] = {
                  index: selectedModalIndex,
                  availableActionId: props.id,
                  availableActionName: props.name,
                  availableActionImage: props.image,
                  metadata: props.metadata,
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
  onSelect: (
    props: null | {
      name: string;
      id: string;
      image?: string;
      metadata: unknown;
    }
  ) => void;
  availableItems: { id: string; name: string; image: string }[];
}) {
  const [step, setStep] = useState(0);
  const isTrigger = index != 1;
  const [selectedActions, setSelectedActions] = useState<{
    id: string;
    name: string;
  }>();
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 justify-center items-center bg-black bg-opacity-65 w-full flex md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative border-white  bg-ModalBackground border-2  text-white rounded-lg shadow-sm ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-white">
            <div className="font-bold">
              Select {index === 1 ? "Trigger" : "Action"}
            </div>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 flex flex-col">
            {step === 1 && selectedActions?.name === "email" && (
              <EmailSelector
                setMetaData={(metadata) => {
                  onSelect({ ...selectedActions, metadata });
                }}
              />
            )}
            {step === 1 && selectedActions?.name === "solana" && (
              <SolanaSelector
                setMetaData={(metadata) => {
                  onSelect({ ...selectedActions, metadata });
                }}
              />
            )}
            {step === 0 &&
              availableItems.map((availableItem) => (
                <div
                  key={availableItem.id}
                  className="flex flex-row gap-2 min-h-16 hover:bg-[#071120] hover:cursor-pointer py-2 px-4 border-white border-2 rounded-lg items-center"
                  onClick={() => {
                    if (isTrigger) {
                      onSelect({
                        id: availableItem.id,
                        name: availableItem.name,
                        image: availableItem.image,
                        metadata: {},
                      });
                    } else {
                      setStep((s) => s + 1);
                      setSelectedActions({
                        id: availableItem.id,
                        name: availableItem.name,
                      });
                    }
                  }}
                >
                  <Image
                    src={availableItem.image}
                    alt="ww"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />{" "}
                  <div className="text-sm">{availableItem.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
