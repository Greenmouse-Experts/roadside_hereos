import { useEffect, useState } from "react";
import ServiceSection, {
  useServiceSec,
} from "./components/request-comps/service-sec";
import { List, User, Check } from "lucide-react";
import { BsCash } from "react-icons/bs";
import ProviderLists from "./components/request-comps/provider-list";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import ProfileSection, {
  useProfileSec,
} from "./components/request-comps/profile-sec";
import PaymentSection from "./components/request-comps/payment-sec";

const steps = [
  {
    step: 1,
    title: "Service Information",
    Icon: User,
  },
  {
    step: 2,
    title: "Personal Information",
    Icon: User,
  },
  {
    step: 3,
    title: "Provider Lists",
    Icon: List,
  },
  {
    step: 4,
    title: "Payment Information",
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
  const [currentId] = useCurrentId();
  const reset = () => {
    setStep(0);
    setService(null);
    setProfile(null);
  };
  useEffect(() => {
    if (currentId === null) return;

    if (id !== currentId) {
      reset();
    }
  }, [id, currentId]);
  const [profile, setProfile] = useProfileSec();
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
    if (profile && step < 2) {
      setStep(2);
    }
    if (!service && step > 0) {
      setStep(0);
    }
  }, [service, step, profile]);
  const next = () => {
    setStep(step + 1);
  };

  const current_step = step + 1;
  const progressWidth = ((current_step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-gray-200" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div
            className="h-1 bg-primary transition-all duration-500"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
        <div className="relative flex justify-between">
          {steps.map((item) => {
            const isCompleted = item.step < current_step;
            const isCurrent = item.step === current_step;

            return (
              <button
                key={item.step}
                // onClick={() => setStep(item.step - 1)}
                className="flex flex-col items-center gap-2 z-10"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                    isCompleted
                      ? "bg-green-500"
                      : isCurrent
                        ? "bg-primary ring-4 ring-primary/20"
                        : "bg-white border-2 border-gray-300"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <item.Icon
                      className={`h-5 w-5 ${
                        isCompleted
                          ? "text-white"
                          : isCurrent
                            ? "text-white"
                            : "text-gray-400"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`text-sm font-medium ${
                    isCompleted || isCurrent ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end mb-8">
        <button
          onClick={reset}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
        >
          Reset Form
        </button>
      </div>

      <div className="mt-8">
        {step === 0 && <ServiceSection next={next} />}
        {step === 1 && <ProfileSection next={next} />}
        {step === 2 && <ProviderLists next={next} />}
        {step === 3 && <PaymentSection next={next} />}
      </div>
    </div>
  );
}
