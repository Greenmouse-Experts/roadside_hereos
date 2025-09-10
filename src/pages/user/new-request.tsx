import { useEffect, useLayoutEffect, useState } from "react";
import ServiceSection, {
  useServiceSec,
} from "./components/request-comps/service-sec";
import { List, User } from "lucide-react";
import { BsCash } from "react-icons/bs";
import ProviderLists from "./components/request-comps/provider-list";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";

const steps = [
  {
    step: 1,
    title: "Service Information",
    Icon: User,
  },
  {
    step: 2,
    title: "Provider Lists",
    Icon: List,
  },
  {
    step: 3,
    title: "Payment Lists",
    Icon: BsCash,
  },
];
const current_service_id_atom = atomWithStorage<string | null>(
  "current_service_id",
  null,
);
export const useCurrentId = () => {
  const [currentId, setCurrentId] = useAtom(current_service_id_atom);
  return [currentId, setCurrentId] as const;
};
export default function NewRequests() {
  const [step, setStep] = useState<number>(0);
  const [service, setService] = useServiceSec();
  const { id } = useParams();
  const [currentId, setCurrentId] = useCurrentId();
  const reset = () => {
    setStep(0);
    setService(null);
  };
  useEffect(() => {
    if (currentId === null) return; // ✅ correct check

    if (id !== currentId) {
      reset();
    }
  }, [id, currentId]); // also include `id` here
  useEffect(() => {
    if (!service) {
      console.log("No service selected");
    }
    if (service) {
      console.log("Service selected");
    }
    if (service && step < 1) {
      setStep(1);
    }
  }, [service]);
  return (
    <div className="container mx-auto ">
      {/*{currentId} {id}*/}
      <div className="flex justify-between items-center mb-2">
        {steps.map((item, index) => {
          let onClick = () => {
            setStep(item.step - 1);
          };
          let current_step = step + 1;
          if (current_step >= item.step) {
            return (
              <button
                onClick={onClick}
                className="flex flex-col items-center gap-2 200"
              >
                <div className="aspect-square h-12 w-12 rounded-full grid place-items-center bg-primary">
                  {/*{item.step}*/}
                  {item.Icon && <item.Icon className="text-white" />}
                </div>
                <span className="font-bold text-lg">Step: {item.step}</span>
                <span>{item.title}</span>
              </button>
            );
          }
          return (
            <button
              onClick={() => setStep(item.step - 1)}
              className="flex flex-col items-center gap-2 200"
            >
              <div className="aspect-square h-12 w-12 rounded-full border border-primary grid place-items-center bg-white">
                {/*{item.step}*/}
                {item.Icon && <item.Icon className="text-primary" />}
              </div>
              <span className="font-bold text-lg">Step: {item.step}</span>
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => {
            reset();
          }}
          className="p-2 px-4 bg-primary text-white rounded-xl"
        >
          Reset
        </button>
      </div>
      <div className="mt-8">
        {step === 0 && <ServiceSection />}
        {step === 1 && <ProviderLists />}
      </div>
    </div>
  );
}
