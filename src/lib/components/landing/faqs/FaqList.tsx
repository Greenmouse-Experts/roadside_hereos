import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqList = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={open === 1 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5"
        >
          <div className="px-5 py-1 rounded-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={open === 2 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            At vero eos et accusamus et iusto odio dignissimos?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl">
            Blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={open === 3 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            Itaque earum rerum hic tenetur ?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl">
            Praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={open === 4 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={open === 5 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            At vero eos et accusamus et iusto odio dignissimos?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl">
            Blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={open === 6 ? <FaMinus /> : <FaPlus />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="bg-[#EBEDEF] fw-500 rounded-xl pr-5 mt-3"
        >
          <div className="px-5 py-1 rounded-xl">
            Itaque earum rerum hic tenetur ?
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="px-5 py-1 rounded-xl">
            Praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default FaqList;
