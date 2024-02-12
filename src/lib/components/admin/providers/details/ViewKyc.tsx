const ViewKyc = () => {
  return (
    <>
      <div className="bg-white p-6 shadow rounded min-h-[350px]">
        <div>
          <p className="fw-600 mb-2 flex items-center gap-x-2">
            <span className="block w-4 h-4 bg-primary circle"></span>
            Organisation Information
          </p>
          <div className="bg-gray-50 p-5 grid gap-4 lg:grid-cols-2">
            <div>
              <p className="fw-500 text-gray-500">Business Registration No:</p>
              <p className="fw-600 mt-2"> 349932GBWK</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">
                Date of Incorporation/Registration
              </p>
              <p className="fw-600 mt-2">July 2013</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Operational Address</p>
              <p className="fw-600 mt-2">
                2 Metalbox, Off Acme road, Ikeja Lagos.
              </p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Nature of Company</p>
              <p className="fw-600 mt-2">Sole Proprietorship</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Tax Identification Number</p>
              <p className="fw-600 mt-2">6327973HJQW911919</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">
                Comapany Contact Information
              </p>
              <p className="fw-600 mt-2">multitude@gmail.com</p>
              <p className="fw-600 mt-1">+1 (906) 244 7555</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">
                Business Registartion Certificate
              </p>
              <div className="mt-2">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/19/03/45/material-icon-2155438_1280.png"
                  alt="doc"
                  className="w-32 border-2 cursor-pointer rounded h-16"
                />
              </div>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Insurance Documents</p>
              <div className="mt-2 flex gap-x-3">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/19/03/45/material-icon-2155438_1280.png"
                  alt="doc"
                  className="w-32 border-2 cursor-pointer rounded h-16"
                />
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/19/03/45/material-icon-2155438_1280.png"
                  alt="doc"
                  className="w-32 border-2 cursor-pointer rounded h-16"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="fw-600 mb-2 flex items-center gap-x-2">
            <span className="block w-4 h-4 bg-primary circle"></span>Director's
            Information
          </p>
          <div className="bg-gray-50 p-5 grid gap-4 lg:grid-cols-2">
          <div>
              <p className="fw-500 text-gray-500">Full Name:</p>
              <p className="fw-600 mt-2">Hakimi Giround</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Designation:</p>
              <p className="fw-600 mt-2">Creative Director</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Email:</p>
              <p className="fw-600 mt-2">Hakimi@gmail.com</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Contact Phone:</p>
              <p className="fw-600 mt-2">+1 (913) 320 3283</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="fw-600 mb-2 flex items-center gap-x-2">
            <span className="block w-4 h-4 bg-primary circle"></span>Bank
            Information
          </p>
          <div className="bg-gray-50 p-5 grid gap-4 lg:grid-cols-2">
          <div>
              <p className="fw-500 text-gray-500">Bank Name:</p>
              <p className="fw-600 mt-2">Cypress Int</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Routing Number:</p>
              <p className="fw-600 mt-2">281828GU</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Account Name:</p>
              <p className="fw-600 mt-2">Y2k Commision</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Account Number:</p>
              <p className="fw-600 mt-2">3910011011</p>
            </div>
            <div>
              <p className="fw-500 text-gray-500">Account Type:</p>
              <p className="fw-600 mt-2">Savings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewKyc;
