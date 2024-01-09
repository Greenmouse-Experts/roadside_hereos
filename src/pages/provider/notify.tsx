import Tabs from '../../lib/components/ui/Tabs'
import NotifyList from '../../lib/components/user/notify/NotifyList'

const ProviderNotification = () => {
  const tab = [
    {
      title: <>All</>,
      content: <NotifyList status='all'/>
    },
    {
      title: <>Unread</>,
      content: <NotifyList status='unread'/>
    },
  ]
  return (
    <>
        <div  className='bg-white p-6 rounded-lg shadow min-h-[80vh]'>
          <div className='lg:w-9/12 mx-auto text-white rounded-[17px]'>
            <Tabs tabs={tab} type='charts'/>
          </div>
        </div>
    </>
  )
}

export default ProviderNotification