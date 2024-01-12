import React from 'react'
import CurveLoader from '../../lib/components/ui/loader/curveLoader/CurveLoader';

const AdminRenderedServices = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    // const { isLoading, isError, data } = useQuery({
    //     queryKey: ["getProviders"],
    //     queryFn: getProviders,
    //   });
    setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    return (
      <>
        <div className="bg-white p-6 rounded-lg shadow min-h-[80vh]">
          <p className="fw-600 text-xl">Rendered Services</p>
          <div className="mt-5 lg:mt-10">
            {isLoading && (
              <div className="py-12 flex justify-center items-center text-black">
                <div>
                  <div className="place-center">
                    <CurveLoader />
                  </div>
                  <p className="text-center mt-5 fw-500">
                    Fetching Service Requests...
                  </p>
                </div>
              </div>
            )}
            {/* {isError && <p>Error Occured</p>}
                {data && !!data.users.length && <ProvidersList users={data?.users} />} */}
          </div>
        </div>
      </>
    );
}

export default AdminRenderedServices